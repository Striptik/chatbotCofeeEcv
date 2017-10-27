let messagesManager = require('../messages/manager'),
  request = require('request'),
  postbackDico = require('../messages/postbackDico'),
  userController = require('../users/controller'),
  wordsDico = require('../messages/findingWordsDico'),
  manager = require('../messages/manager'),
  controller = require('../users/controller'),
  _ = require('lodash');

const processPostback = (event, response) => {
  let senderId = event.sender.id;
  let payload = event.postback.payload;

  for (let key in postbackDico) {
    if (_.includes(key, payload)) {
      managefunction(postbackDico[key], senderId, response);
    }
  }
};

const managefunction = (postbackObject, fbUserId, response) => {

  if (postbackObject.type == 'starter') {

    controller.createUser(fbUserId, (error, newUser) => {
      if (error) {
        response.sendStatus(200);
        manager.sendMessage(fbUserId, 'Désolé, il y a une erreur avec ton profil. \nÇa me dépasse.');
      }
      // TODO : check data equal to new user
      postbackObject.postbackFunction(newUser);
    });
  }

  if(postbackObject.type.includes("presentation")) {
    controller.searchUser(fbUserId, (error, user) => {
      if (error || !user) {
        response.sendStatus(200);
        manager.sendMessage(fbUserId, 'Désolé, je n\'aime pas trop ta présentation. \nÇa me dépasse.');
      }
      postbackObject.postbackFunction(user)
    })
  }

};

const processMessage = (event) => {
  // prevent for echoes messages
  if (!event.message.is_echo) {
    let senderId = event.sender.id;
    let message = event.message;

    //XXX: REMOVE
    console.log('>>>>   Message receive from : ' + senderId);
    console.log('>>>>   TEXT :  ' + JSON.stringify(message));

    // Text send by user
    if (message.text) {
      let formattedMsg = message.text.toLowerCase().trim();
      processConversation(senderId, formattedMsg, (err) => {
        if (err) {
          // TODO: Message erreur a l'utilisateur
          //sendMessage()
        }
      });
    }
    // Attachement send by user
    else if (message.attachments) {
     //utils.sendMessageText(senderId, '[CATHERINE] : Ha désolé, mais nous ne gérons pas encore les pièces jointes');
    }

  }


};

const processConversation = (fbUserId, message, cb) => {
  // Retrieve User in Db with facebook user id
  userController.searchUser(fbUserId, (error, user) => {
    // If error durong retrieving user OR user not found
    if (error || !user) {
      console.log('Error or user not found ', { error, user });
      return cb(error);
    }

    // Process in progress
    if (user.step !== -1) {
      // TODO : Make function to continue the process
      // TODO : "VOUS N'AVEZ PAS FINI DE REPONDRE A NOS QUESTIONS ?"
      // TODO : -> envoyer les questions de l'etape qui suit
    }

    // No process in progress
    else {
      parseMessage(user, message);
      cb(undefined, 'SUCCESS')
    }

  });
};

let parseMessage = (user, message) => {

  // Search for words in dictionary
  let score = 0;
  let find = [];

  for (let key in wordsDico) {
    if (_.includes(message, key)) {
      console.log('FIND WORD : ' + key); //XXX: REMOVE
      score++;
      find.push(wordsDico[key])
    }
  }

  // If no words find in dictionnary
  if (!score || !find.length) {
    // MESSAGE ERROR
    manager.sendMessage(user.userIdFb, "What else ??? Ce sera tout ?\n Cella là, il va falloir me la refaire.\n\n" +
      " Sinon tu peux choisir dans la liste pour faire plus simple");
    // TODO: Envoie liste de process (orderCaffe, ...)
  }

  // Multiple words find in the user message
  else if (score > 1) {

  }

  else {

  }
};


module.exports = {
  processPostback,
  processMessage,
  processConversation,
  parseConversation,
};


let messagesManager = require('../messages/manager'),
  userController = require('../users/controller'),
  wordsDico = require('../messages/findingWordsDico')
  mangager = require('../messages/manager');

let request = require('request'),
  _ = require('lodash');

const processPostback = (event) => {
  
  let senderId = event.sender.id;
  let payload = event.postback.payload;
  
  // TODO: Rendre générique
  if (payload === 'GET_STARTED_PAYLOAD') {
    // Get user's first name from the User Profile API
    // and include it in the greeting
    request({
      url: 'https://graph.facebook.com/v2.6/' + senderId,
      qs: {
        access_token: process.env.PAGE_ACCESS_TOKEN,
        fields: 'first_name, last_name',
      },
      method: 'GET',
    }, function (error, response, body) {
      let greeting = '';
      if (error) {
        console.log('Error getting user\'s name: ' + error);
      } else {
        let bodyObj = JSON.parse(body);
        name = bodyObj.first_name;
        last_name = bodyObj.last_name;
        greeting = 'Hi ' + name + ' ' + last_name + '. ';
      }
      let message = greeting + 'My name is SP Movie Bot. I can tell you various details regarding movies. What movie would you like to know about?';
      messagesManager.sendMessage(senderId, { text: message });
    });
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
  
    if (message.text) {
      let formattedMsg = message.text.toLowerCase().trim();
      processConversation(senderId, formattedMsg, (err) => {
        if (err) {
          // TODO: Message erreur a l'utilisateur
          //sendMessage()
        }
      });
    } else if (message.attachments) {
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
    manager.sendMessage(user.userIdFb, "Oups, cella là, il va falloir me la refaire. Clique sur une dés réponses");
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


let messagesManager = require('../messages/manager'),
  postbackDico = require('../messages/postbackDico'),
  manager = require('../messages/manager'),
  request = require('request'),
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
      postbackObject.postbackFunction(newUser)
    })
  }

};

const processMessage = (event) => {
  // prevent for echoes messages
  if (!event.message.is_echo) {
    let senderId = event.sender.id;
    let message = event.message;

  }
  //TODO : HANDLE PARSING USERS SENTENCES

};

module.exports = {
  processPostback,
  processMessage,
};

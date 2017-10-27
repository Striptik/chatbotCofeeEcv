let messagesManager = require('../messages/manager'),
  userController = require('../users/controller');
  request = require('request');

const processPostback = (event) => {
  
  let senderId = event.sender.id;
  let payload = event.postback.payload;


  // TODO: Rendre générique
  if (payload === "GET_STARTED_PAYLOAD") {
    // Get user's first name from the User Profile API
    // and include it in the greeting
    request({
      url: "https://graph.facebook.com/v2.6/" + senderId,
      qs: {
        access_token: process.env.PAGE_ACCESS_TOKEN,
        fields: "first_name, last_name"
      },
      method: "GET"
    }, function(error, response, body) {
      let greeting = "";
      if (error) {
        console.log("Error getting user's name: " +  error);
      } else {
        let bodyObj = JSON.parse(body);
        name = bodyObj.first_name;
        last_name = bodyObj.last_name;
        greeting = "Hi " + name + " " + last_name + ". ";
      }
      let message = greeting + "My name is SP Movie Bot. I can tell you various details regarding movies. What movie would you like to know about?";
      messagesManager.sendMessage(senderId, {text: message});
    });
  }
};

const processMessage = (event) => {
  // prevent for echoes messages
  if (!event.message.is_echo) {
    let senderId = event.sender.id;
    let message = event.message;

  }
  //TODO : HANDLE PARSING USERS SENTENCES
  
  console.log('>>>>   Message receive from : ' + senderId);
  console.log('>>>>   TEXT :  ' + JSON.stringify(message));
  
  if (message.text) {
    let formattedMsg = message.text.toLowerCase().trim();
    parseConversation(senderId, formattedMsg)
  } else if (message.attachments) {
    utils.sendMessageText(senderId, "[CATHERINE] : Ha désolé, mais nous ne gérons pas encore les pièces jointes");
  }
  
};


const parseConversation = (fbUserId, message) => {
  // In Case there is a process not completed
  if (!isProcessCompleted()) {
  
  }
  // No processes launched
  else {
  
  }
  
};

const isProcessCompleted = (fbUserId) => {
  userController.searchUser(fbUserId, )
};


module.exports = {
  processPostback,
  processMessage,
  parseConversation,
};


let request = require('request');

// sends message to user
function sendMessage(recipientId, message) {
  request({
    url: "https://graph.facebook.com/v2.6/me/messages",
    qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
    method: "POST",
    json: {
      recipient: {id: recipientId},
      message: message,
    }
  }, function(error, response, body) {
    if (error) {
      //TODO : Handle Error messages send
      
      console.log("Error sending message: " + response.error);
    }
    
    //TODO: Handle Success messages send
  });
}
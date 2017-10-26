let request = require('request');

const setupGetStartedButton = (response) => {
  let messageData = {
    'get_started': [
      {
        'payload': 'USER_DEFINED_PAYLOAD',
      },
    ],
  };
  
  request({
      url: 'https://graph.facebook.com/v2.6/me/messenger_profile?access_token=' + process.env.PAGE_ACCESS_TOKEN,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      form: messageData,
    },
    (error, response, body) => {
      if (!error && response.statusCode == 200) {
        response.send(body);
      } else {
        console.log('ERROR [GETSTARTEDBUTTON]', error);
        response.send(body);
      }
    });
};


module.exports = {
  setupGetStartedButton,
};
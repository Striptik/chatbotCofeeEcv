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
      url: 'https://graph.facebook.com/v2.6/me/messenger_profile?access_token=EAABZBj3O1ta4BADj6VqK7DxG4ZBzZCU9pmRlronJzCT2OOFrHGoUh4Sbx4JecZAmb4wSG4ZA90qeVQjWckWLO43zTZCLBXHdjF1ogd99MpBj4PfR97DkHzsdIAHBu75RrXwe75Ur9WZCKyIIeVKPo7Slej1Y3ksNZBFlYAzgEWWMlQZDZD',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      form: messageData,
    },
    (error, res, body) => {
    console.log('[GETSTARTED BODY]', body);
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
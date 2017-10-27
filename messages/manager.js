let request = require('request');

// sends message to user
function sendMessage(recipientId, message) {
  const json = {
    recipient: {id: recipientId},
    message: message,
  };
  sendRequest(json);
}

const sendQuickReplies = (recipientId, title, buttons) => {
  const json = {
    recipient: {id: recipientId},
    message: {
      text: title,
      quick_replies: buttons
    },
  };
  sendRequest(json);
};

const sendRequest = (json) => {
  request({
    url: "https://graph.facebook.com/v2.6/me/messages",
    qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
    method: "POST",
    json: json
  }, function(error, response, body) {
    if (error) {
      console.log("Error sending message: " + response.error);
    }
    console.log("Message sent : ");
    console.log(body);
  });
};

module.exports = {
  sendMessage,
  sendQuickReplies,
  sendRequest
};

/*
function sendListProcess(user) {
  let json = {
    recipient: {id: user},
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "list",
          top_element_style: "compact",
          elements: [
            {
              title: "Revoir 8h avant le direct",
              subtitle: "Cette fonctionnalité permet de revoir 8h avant le direct",
              buttons: [
                {
                  title: "Voir",
                  type: "postback",
                  payload: "TUTO_YES_REVOIR"
                }
              ]
            },
            {
              title: "Configurer son profil",
              subtitle: "Tout savoir sur comment configurer son profil",
              buttons: [
                {
                  title: "Voir",
                  type: "postback",
                  payload: "TUTO_YES_PROFIL"
                }
              ]
            },
            {
              title: "Les recommandations",
              subtitle: "Apprendre le fonctionnement des recommandations",
              buttons: [
                {
                  "title": "Voir",
                  "type": "postback",
                  "payload": "TUTO_YES_RECO"
                }
              ]
            },
            {
              title: "Visionnage hors-ligne",
              subtitle: "Cela vous permet de télécharger et visionner du contenu sans être connecté",
              buttons: [
                {
                  "title": "Voir",
                  "type": "postback",
                  "payload": "TUTO_YES_DOWNLOAD"

                }
              ]
            }
          ]
        }
      }
    }
  }
  sendMessageRequest(json, function(err, res) {
    if (err) {
      console.log('Template List message not sent')
    }
    console.log('Template list sent !' + res.message_id)
  })
}*/
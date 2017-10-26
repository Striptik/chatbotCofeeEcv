let express = require('express'),
  router = express.Router(),
  utils = require('../utils/utils');

// Facebook Webhook
// Used for verification
router.get('', (req, res) => {
  if (req.query[ 'hub.verify_token' ] === process.env.VERIFICATION_TOKEN) {
    console.log('Verified webhook');
    res.status(200).send(req.query[ 'hub.challenge' ]);
  } else {
    console.error('Verification failed. The tokens do not match.');
    res.sendStatus(403);
  }
});


// Router where all facebook messages interactios are posted
router.post('', function (req, res) {
  // Handle page event, allways the case for this app
  if (req.body.object === "page") {
  
   // Iterating in all the entry, can have multiple entry
    req.body.entry.forEach(function(entry) {
  
      // Is there a message or an empty
      if (entry.messaging) {
  
        // For each message in entry
        entry.messaging.forEach(function(event) {
  
          // BUTTON, LIST, POSTBACK MESSAGE
          if (event.postback) {
            console.log(event);//XXX: REMOVE
            utils.processPostback(event);
          }
  
          // REAL MESSAGE FROM USER
          if (event.message) {
            console.log(event);//XXX: REMOVE
            utils.processMessage(event);
          }
        });
      }
    });
    res.sendStatus(200);
  }
});
module.exports = router;
let express = require('express'),
  router = express.Router(),
  utils = require('../utils/utils');

// Facebook Webhook
// Used for verification
router.get('', function (req, res) {
  if (req.query[ 'hub.verify_token' ] === process.env.VERIFICATION_TOKEN) {
    console.log('Verified webhook');
    res.status(200).send(req.query[ 'hub.challenge' ]);
  } else {
    console.error('Verification failed. The tokens do not match.');
    res.sendStatus(403);
  }
});

router.post('', function (req, res) {
  if (req.body.object == "page") {
    req.body.entry.forEach(function(entry) {
      entry.messaging.forEach(function(event) {
        if (event.postback) {
          utils.processPostback(event);
        }
      });
    });

    res.sendStatus(200);
  }
});

module.exports = router;
let express = require('express'),
  router = express.Router(),
  utils = require('../utils/utils');

let getStarted = require('./getStarted');

// Facebook Webhook
// Used for verification
router.get('',(req, res) => {
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
          console.log(event);
          utils.processPostback(event);
        }
        // if (event.message) {
        //   console.log(event)
        //   utils.processMessage(event)
        // }
      });
    });
    res.sendStatus(200);
  }
});

router.get('/addGreeting', (req, res) => {
  getStarted.setupGetStartedButton(res);
});

module.exports = router;
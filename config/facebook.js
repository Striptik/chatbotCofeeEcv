let express = require('express'),
  router = express.Router();

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

router.get('/addGreeting', (req, res) => {
  getStarted.setupGetStartedButton(res);
});

module.exports = router;
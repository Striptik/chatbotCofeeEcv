let express = require('express'),
  router = express.Router();

// Facebook Webhook
// Used for verification
router.get('', function (req, res) {
  if (req.query[ 'hub.verify_token' ] === 'this_is_my_token') {
    console.log('Verified webhook');
    res.status(200).send(req.query[ 'hub.challenge' ]);
  } else {
    console.error('Verification failed. The tokens do not match.');
    res.sendStatus(403);
  }
});

module.exports = router;
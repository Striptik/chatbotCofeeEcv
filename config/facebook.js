let express = require('express'),
  router = express.Router(),
  utils = require('../utils/utils');
let count = 0;


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
  console.log(req.body);
  if (req.body.object == "page") {
    console.log(req.body.entry)
    count++;
    console.log('APPEL NB : ' + count);
    req.body.entry[0].messaging.forEach(function(event) {
      console.log(event)
        if (event.postback) {
          console.log(event);
          utils.processPostback(event);
        }
        else if (event.message) {
        console.log(event)
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

module.exports = router;
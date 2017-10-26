let express = require('express'),
  request = require('request'),
  bodyParser = require('body-parser'),
  app = express(),
  port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => {
  console.log('Server is listening on port ' + port);
});

let facebookRouter = require('./config/facebook');


// Server index page
app.use('/webhook', facebookRouter);

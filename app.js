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

app.use('/', (req, res)=> {
  console.log('Deployment is workink find !');
  res.send({
    message: "DEPLOYEMENT OK !",
    status: 200
  }).status(200);
});

let facebookRouter = require('./config/facebook');


// Server index page
app.use('/webhook', facebookRouter);

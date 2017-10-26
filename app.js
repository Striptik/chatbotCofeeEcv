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


// HATEOS Route
app.get('/', (req, res)=> {
  console.log('Deployment is workink find !');
  // TODO: List all the routes
  res.send({
    message: "DEPLOYEMENT OK !",
    status: 200
  }).status(200);
});


// Init Routers
let initRouter = () => {
  //TODO: DECLARE THE NEXT ROUTERS
  let facebookRouter = require('./config/facebook');

  
  app.use('/webhook', facebookRouter);
  //TODO: WRITE THE NEXT ROUTERS
};

initRouter();



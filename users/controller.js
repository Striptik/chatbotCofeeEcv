let usersModel = require('../models/user'),
  moment = require('moment'),
  request = require('request'),
  manager = require('../messages/manager');

const searchUser = (fbId, callback) => {
  usersModel.findOne({userIdFb: fbId}, (err, user) => {
    if(err) {
      // Todo : améliorer les checks
      console.log('error : ' + err);
      return callback(err);
    } else if(!user) {
      console.log('No user found');
      return callback(null);
    }
    return callback(user);
  })
};

//sendMessage(userId, {text: movie[field]});

const createUser = (fbUserId, cb) => {

  request({
    url: 'https://graph.facebook.com/v2.6/' + fbUserId,
    qs: {
      access_token: process.env.PAGE_ACCESS_TOKEN,
      fields: 'first_name, last_name',
    },
    method: 'GET',
  }, function (error, response, body) {

    if (error) {
      console.log('Error getting user\'s name: ' + error);
      return cb(error);
    } else {
      let bodyObj = JSON.parse(body),
        firstname = bodyObj.first_name,
        lastname = bodyObj.last_name,
        newUser = new usersModel(),
        date = new Date;

      newUser.userIdFb = fbUserId;
      newUser.firstname = firstname;
      newUser.lastname = lastname;
      newUser.step = 1;
      newUser.created = date.toISOString();

      newUser.save((error, data) => {
        if (error) {
          console.log('Error new user : ' + error);
          return cb(error);
        }
        console.log('New user : ' + data);
        return cb(null, data);
      });
    }
  });
};

/*
var m = new Thing;
m.name = 'Statue of Liberty';
m.age = 125;
m.updated = new Date;
m.binary = new Buffer(0);
m.living = false;
m.mixed = { any: { thing: 'i want' } };
*/

module.exports = {
  searchUser,
  createUser,
};
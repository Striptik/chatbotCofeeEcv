let usersModel = require('../models/user');

const searchUser = (fbIdn, callback) => {
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

const createhUser = (userData) => {
  let newUser = new usersModel;
  //newUser.userIdFb = userData.event.sender.id;
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
};
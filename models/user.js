var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userIdFb: {type: String, default: null},
  firstname: {type: String, default: null},
  lastname: {type: String, default: null},
  promo: {type: String, default: null},
  option: {type: String, default: null},
  nbCoffee: {type: Number, default: 0},
  habitDrink: [{
    date: {type: String},
    typeDrink: {type: String}
  }],
  favoriteDrink: {type: String, default: null},
  wantedContent: {type: Boolean, default: true},
  favoriteContent: {type: String, default: null},
  schoolDays: [Number],
  step: {type: Number, default: 0},
  created: {type: Date},
  updated: {type: Date, default: Date.now},
  // ADD HISTORY []
});

module.exports = mongoose.model("User", UserSchema);

const mongoose    = require('mongoose');

var profileSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  creditCardNum: String,
  img: String,
  orderHistory: []
});


var Profile       = mongoose.model('Profile', profileSchema);

exports.model     =Profile;
exports.schema    =profileSchema;
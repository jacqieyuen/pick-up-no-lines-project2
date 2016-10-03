const mongoose      = require('mongoose');

var inventorySchema = new mongoose.Schema({
  title: String,
  description: String,
  img: String,
  price: String,
  category: String,
});


var Inventory       = mongoose.model('Inventory', inventorySchema);

exports.model       = Inventory;
exports.schema      = inventorySchema;
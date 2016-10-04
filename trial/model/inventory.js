var mongoose = require('mongoose');

var inventorySchema = new mongoose.Schema({
    title            : String,
    description      : String,
    img              : String,
    price            : String,
    category         : String

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Inventory', inventorySchema);
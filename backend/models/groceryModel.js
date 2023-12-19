const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
    grocery_id : {type: String, required: true},
    name : {type:String, required: true},
    category: {type: String, required: true},
    quantity : {type: String, required: true},
    status: {type: String, required: true},
    expiry_date: {type: Number},
    email: {type: String, required: true}
})

const Grocery = mongoose.model('Grocery', grocerySchema, 'Grocery');

module.exports = Grocery; 
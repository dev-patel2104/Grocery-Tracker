const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
    name : {type:String, required: true},
    category: {type: String, required: true},
    quantity : {type: String, required: true},
    status: {type: String, required: true},
    date: {type: Number},
    email: {type: String, required: true}
})

const Grocery = mongoose.model('Grocery', userSchema, 'Grocery');

module.exports = Grocery; 
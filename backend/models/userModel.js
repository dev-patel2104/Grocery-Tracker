const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    password: {type: String},
    email: {type: String},
})

const User = mongoose.model('User', userSchema, 'User');

User.checkIfAlreadyPresent = async function(email) {
    try
    {
        const existingUser = await this.findOne({email});
        if(existingUser !== null)
        {
            return true;
        }
    }
    catch (error)
    {
        console.error("Error checking existing user", error);
        return false;
    }
};

module.exports = User; 
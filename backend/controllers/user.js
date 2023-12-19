const User = require('../models/userModel.js');

exports.addUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required in the request body" });
        }

        const userExist = await User.checkIfAlreadyPresent(email);
        if (userExist) {
            return res.status(200).json({ message: "The DB already contains this email address" });
        }
        const newUser = new User({
            email,
            password,
        });

        const addedUser = await newUser.save();

        return res.status(201).json({ email: email });
    }
    catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "An error occurred" });
    }
}

exports.userGetByEmail = async (req, res) => {
    try {

        const email = req.params.email;
        if (!email) {
            return res.status(400).json({ message: "Email is required to check for user" });
        }

        const user = await User.findOne({email : email});
        console.log(user);

        if(!user)
        {
            return res.status(404).json({error: "No such email present in the database"});
        }
        else
        {
            return res.status(200).json(user);
        }
    }
    catch (error) {
        // Handling errors and returning a 500 status with an error message
        return res.status(500).json({ message: "An error occurred" });
    }
    
}

exports.deleteUser = async (req, res) => {
    try {
        const email = req.params.email;
    
        if (!email) {
          return res.status(400).json({ error: "Email is required to know which user to delete" });
        }
    
        const deletedUser = await User.findOneAndDelete({ email: email });
    
        if (!deletedUser) {
          return res.status(404).json({ message: "User not found" });
        }
    
        console.log("User deleted successfully");
    
        return res.status(200).json({ message: "User deleted successfully" });
      } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({ message: "An error occurred" });
      }
}
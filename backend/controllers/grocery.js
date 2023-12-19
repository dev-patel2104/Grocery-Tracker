const Grocery = require('../models/groceryModel');
const { v4: uuidv4 } = require('uuid');

exports.addGrocery = async (req, res) => {
    try {
        const { name, category, quantity, status, email, expiry_date } = req.body;

        if (!name || !category || !quantity || !status || !email) {
            return res.status(400).json({ error: "Not all the available data is present" });
        }

        const uuidValue = uuidv4();

        const groceryData = {
            email: email,
            name: name,
            grocery_id: uuidValue,
            category: category,
            quantity: quantity,
            status: status,
            expiry_date: expiry_date || null,
        };

        // if (expiry_date !== null) {
        //     groceryData.expiry_date = expiry_date;
        //   }

        const newGrocery = new Grocery(groceryData);
        const addedGrocery = await newGrocery.save();

        return res.status(201).json({ grocery_id: uuidValue });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "An error occurred" });
    }
}


exports.deleteGrocery = async (req, res) => {
    try {
        const grocery_id = req.params.grocery_id;
        const email = req.query.email;

        if (!grocery_id || !email) {
            return res.status(400).json({ error: "Provide all the necessary input fields to know which item to delete" });
        }

        const deletedItem = await Grocery.findOneAndDelete({
            email: email,
            grocery_id: grocery_id,
        });

        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        console.log("Item deleted successfully");

        return res.status(200).json({ message: "Item deleted successfully" });
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({ message: "An error occurred" });
    }
}

exports.editGrocery = async (req, res) => {
    try {
        const { name, category, quantity, status, email, expiry_date, grocery_id } = req.body;

        if (!name || !category || !quantity || !status || !email || !grocery_id) {
            return res.status(400).json({ error: "Not all the available data is present" });
        }

        const updatedData = {
            name: name,
            grocery_id: grocery_id,
            category: category,
            quantity: quantity,
            status: status,
            email: email,
            expiry_date: expiry_date || null,
        };

        const editedItem = await Grocery.findOneAndUpdate(
            { email: email, grocery_id: grocery_id },
            { $set: updatedData },
            { new: true }
        );

        if (!editedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        console.log("Item edited successfully");

        return res.status(200).json({ message: "Item edited successfully" });
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({ message: "An error occurred" });
    }
}

exports.getGroceryByEmail = async (req, res) => {
    try {
        const email = req.params.email;

        if (!email) {
            return res.status(400).json({
                message: "Email is required to get grocery information for the user",
            });
        }

        const result = await Grocery.find({ email: email });

        if (!result || result.length === 0) {
            return res.status(204).json({
                message: "No grocery item for the given email present in the database",
            });
        } else {
            // Transform items to remove _id and other MongoDB-specific fields
            const transformedItems = result.map(item => {
                const transformedItem = { ...item.toObject() };
                delete transformedItem._id; // Remove MongoDB-specific field
                return transformedItem;
            });

            return res.status(200).json(transformedItems);
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "An error occurred" });
    }
}
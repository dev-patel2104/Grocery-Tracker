const express = require('express');

const groceryController = require('../controllers/grocery');

const router = express.Router();

router.post('/', groceryController.addGrocery);
router.put('/', groceryController.editGrocery);
router.get('/:email', groceryController.getGroceryByEmail);
router.delete('/:grocery_id', groceryController.deleteGrocery);

module.exports = router;
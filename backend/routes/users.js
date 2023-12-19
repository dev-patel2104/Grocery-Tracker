const express = require('express');

const userController = require('../controllers/users');

const router = express.Router();

router.put('/', userController.addUser);
router.get('/:email', userController.userGetByEmail);
router.delete('/:email', userController.deleteUser);

module.exports = router;
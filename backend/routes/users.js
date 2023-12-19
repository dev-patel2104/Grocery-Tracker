const express = require('express');

const userController = require('../controllers/users');

const router = express.Router();

router.post('/users', userController.addUser);
router.get('/users/:email', userController.userGetByEmail);
router.delete('/users/:email', userController.deleteUser);

module.exports = router;
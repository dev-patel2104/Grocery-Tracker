const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/', userController.addUser);
router.get('/:email', userController.userGetByEmail);
router.delete('/:email', userController.deleteUser);

module.exports = router;
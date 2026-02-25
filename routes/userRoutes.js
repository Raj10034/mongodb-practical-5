const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const {validateUser} = require('../middleware/validation');

router.get('/',userController.getUsers);

router.post('/',validateUser,userController.addUser);

module.exports = router;
const express = require('express');
const userControllers = require('../database/controllers/userControllers');
const tokenValidate = require('../database/middlewares/tokenValidate');

const router = express.Router();

router.get('/', tokenValidate, userControllers.getUsers);
router.get('/:id', tokenValidate, userControllers.getUserById);
router.post('/', userControllers.createUser);

module.exports = router;

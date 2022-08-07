const express = require('express');
const loginController = require('../database/controllers/loginControllers');

const router = express.Router();

router.post('/', loginController.login);

module.exports = router;

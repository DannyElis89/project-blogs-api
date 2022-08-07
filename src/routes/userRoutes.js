const express = require('express');
const userControllers = require('../database/controllers/userControllers');

const router = express.Router();

router.post('/', userControllers.createUser);

module.exports = router;

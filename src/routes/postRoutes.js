const express = require('express');
const postControllers = require('../database/controllers/postControllers.js');
const tokenValidate = require('../database/middlewares/tokenValidate');

const router = express.Router();

router.post('/', tokenValidate, postControllers.createPost);
router.get('/', tokenValidate, postControllers.getAll);

module.exports = router;

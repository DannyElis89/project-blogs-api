const express = require('express');
const categoriesController = require('../database/controllers/categoriesController');
const tokenValidate = require('../database/middlewares/tokenValidate');

const router = express.Router();

router.get('/', tokenValidate, categoriesController.getAll);
router.post('/', tokenValidate, categoriesController.createCategory);

module.exports = router;

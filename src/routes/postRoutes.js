const express = require('express');
const postControllers = require('../database/controllers/postControllers.js');
const tokenValidate = require('../database/middlewares/tokenValidate');

const router = express.Router();

router.post('/', tokenValidate, postControllers.createPost);
router.get('/', tokenValidate, postControllers.getAll);
router.get('/search', tokenValidate, postControllers.search);
router.get('/:id', tokenValidate, postControllers.getById);
router.put('/:id', tokenValidate, postControllers.updatePost);
router.delete('/:id', tokenValidate, postControllers.deletePost);

module.exports = router;

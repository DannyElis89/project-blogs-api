const express = require('express');
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const postRoutes = require('./routes/postRoutes.js');

const app = express();

app.use(express.json());
app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);

module.exports = app;

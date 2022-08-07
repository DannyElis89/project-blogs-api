const express = require('express');
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

app.use(express.json());
app.use('/login', loginRoutes);
app.use('/user', userRoutes);

module.exports = app;

const express = require('express');
const loginValidation = require('../middlewares/validateLogin');

const root = express.Router({ mergeParams: true });

root.use('/user', require('./users/router'));
root.post('/login', loginValidation, require('./login'));

module.exports = root;
const express = require('express');
const loginValidation = require('../middlewares/validateLogin');

const root = express.Router({ mergeParams: true });

root.use('/user', require('./users/router'));
root.post('/login', loginValidation, require('./login'));
root.use('/categories', require('./categories/router'));
root.use('/post', require('./blogposts/router'));

module.exports = root;
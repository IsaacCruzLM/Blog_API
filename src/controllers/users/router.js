const express = require('express');
const emailValidation = require('../../middlewares/users/emailValidate');
const userValidation = require('../../middlewares/users/userValidate');

const router = express.Router({ mergeParams: true });

router.post('/', emailValidation, userValidation, require('./registerUser'));

module.exports = router;
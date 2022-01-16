const express = require('express');
const emailValidation = require('../../middlewares/users/emailValidate');
const userValidation = require('../../middlewares/users/userValidate');
const auth = require('../../middlewares/auth');

const router = express.Router({ mergeParams: true });

router.post('/', emailValidation, userValidation, require('./registerUser'));
router.get('/', auth, require('./getAllUsers'));
router.get('/:id', auth, require('./getUserById'));
router.delete('/me', auth, require('./deleteUserMe'));

module.exports = router;
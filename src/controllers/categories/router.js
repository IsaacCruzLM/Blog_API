const express = require('express');
const auth = require('../../middlewares/auth');

const router = express.Router({ mergeParams: true });

router.post('/', auth, require('./registerCategory'));
router.get('/', auth, require('./getAllCategories'));

module.exports = router;
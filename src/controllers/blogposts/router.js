const express = require('express');
const auth = require('../../middlewares/auth');
const categoryIdsValidate = require('../../middlewares/blogposts/categoryIdsValidate');
const blogPostValidate = require('../../middlewares/blogposts/blogPostValidate');

const router = express.Router({ mergeParams: true });

router.post('/', auth, categoryIdsValidate, blogPostValidate, require('./registerBlogPost'));
router.get('/', auth, require('./getAllBlogPost'));

module.exports = router;
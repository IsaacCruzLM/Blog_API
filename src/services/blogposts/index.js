const registerBlogPostFunction = require('./registerBlogPost');
const getAllBlogPostFunction = require('./getAllBlogPost');
const getBlogPostByIdFunction = require('./getBlogPostById');

module.exports = {
    registerBlogPost: (blogpost, userId) => registerBlogPostFunction(blogpost, userId),
    getAllBlogPost: () => getAllBlogPostFunction(),
    getBlogPostById: (id) => getBlogPostByIdFunction(id),
};
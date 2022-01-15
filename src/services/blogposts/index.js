const registerBlogPostFunction = require('./registerBlogPost');
const getAllBlogPostFunction = require('./getAllBlogPost');

module.exports = {
    registerBlogPost: (blogpost, userId) => registerBlogPostFunction(blogpost, userId),
    getAllBlogPost: () => getAllBlogPostFunction(),
};
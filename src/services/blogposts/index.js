const registerBlogPostFunction = require('./registerBlogPost');

module.exports = {
    registerBlogPost: (blogpost, userId) => registerBlogPostFunction(blogpost, userId),
};
const registerBlogPostFunction = require('./registerBlogPost');
const getAllBlogPostFunction = require('./getAllBlogPost');
const getBlogPostByIdFunction = require('./getBlogPostById');
const updateBlogPostByIdFunction = require('./updateBlogPostById');
const deleteBlogPostByIdFunction = require('./deleteBlogPostById');

module.exports = {
    registerBlogPost: (blogpost, userId) => registerBlogPostFunction(blogpost, userId),
    getAllBlogPost: () => getAllBlogPostFunction(),
    getBlogPostById: (id) => getBlogPostByIdFunction(id),
    updateBlogPostById: (info, id, userId) => updateBlogPostByIdFunction(info, id, userId),
    deleteBlogPostById: (id, userId) => deleteBlogPostByIdFunction(id, userId),
};
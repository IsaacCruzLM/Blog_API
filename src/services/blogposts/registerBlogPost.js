const { BlogPost } = require('../../../models');

module.exports = async (blogpost, userId) => {
    const { title, content } = blogpost;
    const newBlogPost = {
        title,
        content,
        userId,
        published: (new Date()).toISOString(),
        updated: (new Date()).toISOString(),
    };

    const blogPostSaved = await BlogPost.create(newBlogPost);
    
    return { blogPostSaved };
};
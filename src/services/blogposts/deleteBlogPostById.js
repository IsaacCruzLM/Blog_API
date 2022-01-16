const { BlogPost } = require('../../../models');

const NOT_FOUND = { message: 'Post does not exist' };
const NOT_AUTHORIZED = { message: 'Unauthorized user' };

module.exports = async (id, userId) => {
    const blogPost = await BlogPost.findByPk(id);
    if (!blogPost) return NOT_FOUND;

    if (userId !== blogPost.userId) return NOT_AUTHORIZED;

    return blogPost.destroy({
        where: {
            id,
        },
    });
};
const { BlogPost, Categorie } = require('../../../models');

const NOT_FOUND = { message: 'Post not found' };
const NOT_AUTHORIZED = { message: 'Unauthorized user' };

module.exports = async ({ title, content }, id, userId) => {
    const blogPost = await BlogPost.findByPk(id);
    if (!blogPost) return NOT_FOUND;

    console.log(userId);
    console.log(blogPost.userId);
    if (userId !== blogPost.userId) return NOT_AUTHORIZED;

    await blogPost.update({ title, content });

    return BlogPost.findByPk(id, {
        include: [{ 
            model: Categorie,
            as: 'categories',
            through: { attributes: [] },
        }],
        attributes: { exclude: ['published', 'updated'] },
    });
};
const Sequelize = require('sequelize');

const config = require('../../sequelize/config/config');
const { BlogPost, PostCategorie } = require('../../sequelize/models');

const sequelize = new Sequelize(config.development);

module.exports = async (blogpost, userId) => {
    const { title, content, categoryIds } = blogpost;
    const newBlogPost = {
        title,
        content,
        userId,
        published: new Date(),
        updated: new Date(),
    };

    const blogPost = await sequelize.transaction(async (t) => {
        const blogPostSaved = await BlogPost.create(newBlogPost, { transaction: t });

        await PostCategorie.bulkCreate(
            categoryIds.map((categoryId) => ({ postId: blogPostSaved.id, categoryId })),
            { transaction: t },
        );

        const { published, updated, ...rest } = blogPostSaved.dataValues;

        return rest;
    });

    return { blogPost };
};
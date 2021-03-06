const { BlogPost, User, Categorie } = require('../../sequelize/models');

module.exports = async (id) => (
    BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Categorie, as: 'categories', through: { attributes: [] } },
        ],
    })
);
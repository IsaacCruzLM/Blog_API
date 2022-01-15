const { BlogPost, User, Categorie } = require('../../../models');

module.exports = async () => (
    BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Categorie, as: 'categories', through: { attributes: [] } },
        ],
    })
);
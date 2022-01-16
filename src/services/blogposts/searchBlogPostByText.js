const { Op } = require('sequelize');
const { BlogPost, User, Categorie } = require('../../sequelize/models');

// Requisição de OP do sequelize retirado do repositório de Eric Reis da turma 12
module.exports = async (searchTerm) => (
    BlogPost.findAll({
        where: {
            [Op.or]: {
                title: {
                  [Op.like]: `%${searchTerm}%`,
                },
                content: {
                  [Op.like]: `%${searchTerm}%`,
                },
            },
        },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Categorie, as: 'categories', through: { attributes: [] } },
        ],
    })
);
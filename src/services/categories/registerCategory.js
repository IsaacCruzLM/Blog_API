const { Categorie } = require('../../sequelize/models');

module.exports = async (category) => (
    Categorie.create(category)
);
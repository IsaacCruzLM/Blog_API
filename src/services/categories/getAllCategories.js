const { Categorie } = require('../../sequelize/models');

module.exports = async () => (
    Categorie.findAll()
);
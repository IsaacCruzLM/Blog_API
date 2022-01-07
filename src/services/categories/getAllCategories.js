const { Categorie } = require('../../../models');

module.exports = async () => (
    Categorie.findAll()
);
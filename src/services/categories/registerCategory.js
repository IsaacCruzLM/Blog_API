const { Categorie } = require('../../../models');

module.exports = async (category) => (
    Categorie.create(category)
);
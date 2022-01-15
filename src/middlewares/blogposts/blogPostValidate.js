const Services = require('../../services/categories');

const CATEGORYIDS_NOT_FOUND = {
    message: '"categoryIds" not found',
};

module.exports = async (req, res, next) => {
    const { categoryIds } = req.body;

    const categoryIdsFound = (await Services.getAllCategories()).map((category) => category.id);

    const everyIdExists = categoryIds.every((categoryId) => categoryIdsFound.includes(categoryId));

    if (!everyIdExists) return res.status(400).send(CATEGORYIDS_NOT_FOUND);

    next();
};
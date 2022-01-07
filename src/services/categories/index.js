const registerCategoryFunction = require('./registerCategory');
const getAllCategoriesFunction = require('./getAllCategories');

module.exports = {
    registerCategory: (category) => registerCategoryFunction(category),
    getAllCategories: () => getAllCategoriesFunction(),
};
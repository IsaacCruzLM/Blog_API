const Services = require('../../services/categories');

module.exports = async (req, res) => {
  try {
    const categories = await Services.getAllCategories();

    return res.status(200).send(categories);
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};
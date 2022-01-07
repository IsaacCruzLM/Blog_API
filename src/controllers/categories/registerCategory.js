const Services = require('../../services/categories');

const INVALID_FIELDS = {
  message: '"name" is required',
};

module.exports = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(400).send(INVALID_FIELDS);

    const category = await Services.registerCategory(req.body);

    return res.status(201).send(category);
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};
const Services = require('../services/users');

const INVALID_FIELDS = {
  message: 'Invalid fields',
};

module.exports = async (req, res) => {
  try {
    const token = await Services.findUser(req.body);

    if (!token) return res.status(400).send(INVALID_FIELDS);

    return res.status(200).send({ token });
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};
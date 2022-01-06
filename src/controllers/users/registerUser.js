const Services = require('../../services/users');

module.exports = async (req, res) => {
  try {
    const token = await Services.registerUser(req.body);

    return res.status(201).send({ token });
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};
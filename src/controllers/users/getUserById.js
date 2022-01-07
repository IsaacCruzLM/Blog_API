const Services = require('../../services/users');

const NOT_FOUND = { message: 'User does not exist' };

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const userFound = await Services.getUserById(id);

    if (!userFound) return res.status(404).send(NOT_FOUND);

    return res.status(200).send(userFound);
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};
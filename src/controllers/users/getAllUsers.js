const Services = require('../../services/users');

module.exports = async (req, res) => {
  try {
    const users = await Services.getAllUsers();

    return res.status(200).send(users);
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};
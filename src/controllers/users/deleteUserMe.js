const Services = require('../../services/users');

module.exports = async (req, res) => {
  try {
    const { id } = req.user.dataValues;

    await Services.deleteUserMe(id);

    return res.status(204).end();
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};
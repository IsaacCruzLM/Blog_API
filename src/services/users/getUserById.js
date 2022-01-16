const { User } = require('../../sequelize/models');

module.exports = async (id) => {
    const userFound = await User.findByPk(id);

    return userFound;
};
const { User } = require('../../sequelize/models');
const authService = require('../auth');

module.exports = async (user) => {
    const { email, password } = user;
    
    const userFound = await User.findOne({ where: { email } });

    if (!userFound || userFound.password !== password) return false;

    const { password: _password, ...userWithoutPassword } = userFound;

    const token = authService.genToken(userWithoutPassword);

    return token;
};
const { User } = require('../../sequelize/models');
const authService = require('../auth');

module.exports = async (user) => {
    const { displayName, email, password, image } = user;
    const newUser = {
        displayName,
        email,
        password,
        image,
    };

    await User.create(newUser);

    const { password: _password, ...userWithoutPassword } = user;

    const token = authService.genToken(userWithoutPassword);
    
    return token;
};
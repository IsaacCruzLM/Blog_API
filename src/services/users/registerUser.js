const { User } = require('../../../models');
const authService = require('../auth');

module.exports = async (user) => {
    const { name, email, password, image } = user;
    const newUser = {
        name,
        email,
        password,
        image,
    };

    await User.create(newUser);

    const { password: _password, ...userWithoutPassword } = user;

    const token = authService.genToken(userWithoutPassword);
    
    return token;
};
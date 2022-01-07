const registerUserFunction = require('./registerUser');
const findUserFunction = require('./findUser');
const getAllUsersFunction = require('./getAllUsers');

module.exports = {
    registerUser: (user) => registerUserFunction(user),
    findUser: (user) => findUserFunction(user),
    getAllUsers: () => getAllUsersFunction(),
};
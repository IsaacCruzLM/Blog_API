const registerUserFunction = require('./registerUser');
const findUserFunction = require('./findUser');
const getAllUsersFunction = require('./getAllUsers');
const getUserByIdFunction = require('./getUserById');
const deleteUserMeFunction = require('./deleteUserMe');

module.exports = {
    registerUser: (user) => registerUserFunction(user),
    findUser: (user) => findUserFunction(user),
    getAllUsers: () => getAllUsersFunction(),
    getUserById: (id) => getUserByIdFunction(id),
    deleteUserMe: (id) => deleteUserMeFunction(id),
};
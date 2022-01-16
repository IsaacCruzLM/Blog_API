const { User } = require('../../sequelize/models');

module.exports = async (id) => (
    User.destroy({
        where: {
            id,
        },
    })
);
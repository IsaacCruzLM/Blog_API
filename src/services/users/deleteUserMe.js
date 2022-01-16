const { User } = require('../../../models');

module.exports = async (id) => (
    User.destroy({
        where: {
            id,
        },
    })
);
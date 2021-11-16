module.exports = (sequelize, Sequelize) => {

    const Holiday = sequelize.define('holidays', {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_type: {
            type: Sequelize.ENUM('default', 'user'),
            defaultValue: 'default'
        },
        user_id: {
            type: Sequelize.STRING
        },
        holiday_name: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATE
        },
        created_at: {

            type: Sequelize.STRING
        },
        updated_at: {

            type: Sequelize.STRING
        },

    }, {
        freezeTableName: true,
        timestamps: false
    });


    return Holiday;
}
module.exports = (sequelize, Sequelize) => {

    const HolidayYear = sequelize.define('holiday_year', {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_type: {
            type: Sequelize.ENUM('default', 'Admin_User'),
            defaultValue: 'default'
        },
        user_id: {
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.STRING
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


    return HolidayYear;
}
module.exports = (sequelize, Sequelize) => {


    const Salary = sequelize.define('salary', {
        salary_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.INTEGER,
        },
        role_type: {
            type: Sequelize.ENUM('Admin_User', 'Employee'),
            defaultValue: 'Admin_User'
        },
        salary_type: {
            type: Sequelize.ENUM('Daily', 'Hourly', 'Monthly'),
            defaultValue: 'Monthly'
        },
        salary_amount: {
            type: Sequelize.FLOAT,
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


    return Salary;
}
module.exports = (sequelize, Sequelize) => {

    const BankDetails = sequelize.define('bank_detail', {
        id: {
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
        acc_no: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        ifsc_code: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        bank_name: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        branch: {
            type: Sequelize.STRING,
            defaultValue: null
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


    return BankDetails;
}
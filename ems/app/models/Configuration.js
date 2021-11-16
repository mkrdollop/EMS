module.exports = (sequelize, Sequelize) => {
    //var current_date = new Date();
    const Configuration = sequelize.define('user_configuration', {
        
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.INTEGER,
        },
        currency_country_id: {
            type: Sequelize.INTEGER,
            defaultValue: null
        },
        restrict_emp_punch_device: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        notify_on_emp_punch: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        remark_on_punch: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        restrict_developer_device: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        punch_address_required: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        is_selfie_required: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        wage_type: {        ///salary type
            type: Sequelize.ENUM('Daily', 'Hourly', 'Monthly'),
            defaultValue: 'Monthly'
        },
        created_at: {
            type: Sequelize.STRING,

        },
        updated_at: {
            type: Sequelize.STRING,

        }
    }, {
        freezeTableName: true,
        timestamps: false
    });


    return Configuration;
}
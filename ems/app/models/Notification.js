
module.exports = (sequelize, Sequelize) => {

    const Notification = sequelize.define('notification', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.INTEGER,
        },
        reciever_id: {
            type: Sequelize.INTEGER,
        },
        role_type: {
            type: Sequelize.ENUM('Admin','Admin_User','Employee'),
            
        },
        reciever_type: {
            type: Sequelize.ENUM('Admin','Admin_User','Employee'),
            
        },
        action: {
            type: Sequelize.STRING
        },
        title	: {
            type: Sequelize.STRING
        },
        message: {
            type: Sequelize.TEXT
        },
        is_read: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        created_at: {
            type: Sequelize.STRING,
        },
        updated_at: {
            type: Sequelize.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: false
    });

    return Notification;
}

module.exports = (sequelize, Sequelize) => {

    const SupportChat = sequelize.define('support_chat', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sender_id: {
            type: Sequelize.INTEGER,
        },
        reciever_id: {
            type: Sequelize.INTEGER,
        },
        sender_type: {
            type: Sequelize.ENUM('Admin','Admin_User','Employee'),
            
        },
        reciever_type: {
            type: Sequelize.ENUM('Admin','Admin_User','Employee'),
            
        },
        message: {
            type: Sequelize.TEXT
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

    return SupportChat;
}
module.exports = (sequelize, Sequelize) => {
    		
    const Admin = sequelize.define('admin', {
        admin_id: {
            type: Sequelize.STRING,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        email: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        password: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        profile_pic: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        language: {
            type: Sequelize.ENUM('English', 'Hindi'),
            defaultValue: 'English'
        },
        otp: {
            type: Sequelize.INTEGER,
            defaultValue: null
        },
        token: {
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
        

    return Admin;
}
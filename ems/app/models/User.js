module.exports = (sequelize, Sequelize) => {
    
    		
    const User = sequelize.define('user', {
        user_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        admin_id: {
            type: Sequelize.INTEGER,
        },
        employee_id: {
            type: Sequelize.INTEGER,
            defaultValue: null
        },
        role_type: {
            type: Sequelize.ENUM('Admin_User', 'Employee'),
            defaultValue: 'Admin_User'
        },
        first_name: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        last_name: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        company_name: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        mobile: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        profile_pic: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        banner: {                           
            type: Sequelize.STRING,         
            defaultValue: null
        },
        logo: {
            type: Sequelize.STRING,         
            defaultValue: null
        },
        dob: {
            type: Sequelize.DATE,
            defaultValue: null
        },
        doj: {
            type: Sequelize.DATE,
            defaultValue: null
        },
        
        emp_strength_id: {
            type: Sequelize.INTEGER,
        },
        work_time_id: {
            type: Sequelize.INTEGER,
            defaultValue: null
        },
        department_branch_id: {
            type: Sequelize.INTEGER,
            defaultValue: null
        },
        calender_id: {
            type: Sequelize.INTEGER,
            defaultValue: null
        },
        language: {
            type: Sequelize.ENUM('English', 'Hindi'),
            defaultValue: 'English'
        },
        fcm_id: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        device_type: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        imei_id: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        otp: {
            type: Sequelize.INTEGER,
            defaultValue: null
        },
        is_register: {
            type: Sequelize.BOOLEAN ,     //1 - social, 0 - not social
            defaultValue: 0
        },
        emp_first_login: {
            type: Sequelize.BOOLEAN,     //1 - login, 0 - not login
            defaultValue: 0
        },
        is_verified: {
            type: Sequelize.BOOLEAN ,     //1 - social, 0 - not social
            defaultValue: 0
        },
        is_social: {
            type: Sequelize.BOOLEAN ,     //1 - social, 0 - not social
            defaultValue: 0
        },
        is_active: {
            type: Sequelize.BOOLEAN,      //1 - active, 0 - deactive
            defaultValue: 1
        },
        is_deleted: {
            type: Sequelize.BOOLEAN  ,    //1 - not deleted, 0 - deleted
            defaultValue: 1
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
        

    return User;
}
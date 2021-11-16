module.exports = (sequelize, Sequelize) => {

    const Attendance = sequelize.define('attendance', {
        attendance_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.INTEGER,
        },
        role_type: {
            type: Sequelize.ENUM('Admin_User', 'Employee'),
            defaultValue: 'Employee'
        },
        work_time_id: {
            type: Sequelize.INTEGER,
        },
        punch_in_type: {
            type: Sequelize.ENUM('Qrcode', 'Selfie', 'Admin'),
            defaultValue: 'Selfie'
        },
        punch_out_type: {
            type: Sequelize.ENUM('Qrcode', 'Selfie', 'Admin'),
            defaultValue: 'null'
        },
        punch_for: {
            type: Sequelize.ENUM('Admin_User','Employee'),
            defaultValue: 'Employee'
        },
        punch_in_remark: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        punch_out_remark: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        over_time: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        over_time_rate: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        over_time_remark: {
            type: Sequelize.TEXT,
            defaultValue: null
        },
        punch_in_by: {
            type: Sequelize.ENUM('Employee', 'Admin_User'),
            defaultValue: 'Employee'
        },
        punch_out_by: {
            type: Sequelize.ENUM('Employee', 'Admin_User'),
            defaultValue: null
        },
        attendance_type_id: {
            type: Sequelize.INTEGER,
        },
        punch_in_image: {
            type: Sequelize.STRING, //company banner
            defaultValue: null      // logo
        },
        punch_out_image: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        punch_in_time: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        punch_out_time: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        
        punch_in_location: {
            type: Sequelize.TEXT,
            defaultValue: null
        },
        punch_out_location: {
            type: Sequelize.TEXT,
            defaultValue: null
        },
        punch_in_lat: {
            type: Sequelize.STRING,         
            defaultValue: null
        },
        punch_in_long: {
            type: Sequelize.STRING,         
            defaultValue: null
        },
        punch_out_lat: {
            type: Sequelize.STRING,         
            defaultValue: null
        },
        punch_out_long: {
            type: Sequelize.STRING,        
            defaultValue: null
        },
        created_at: {
            type: Sequelize.STRING,
            timestamps: true,
        },
        updated_at: {
            type: Sequelize.STRING,
            timestamps: true,
        },
       
        

    }, {
        freezeTableName: true,
        timestamps: false
    });


    return Attendance;
}
module.exports = (sequelize, Sequelize) => {
    const AttendanceType = sequelize.define('attendance_type', {
        attendance_type_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        attendance_type_name: {
            type: Sequelize.STRING
        },
        attendance_type: {
            type: Sequelize.STRING,
            defaultValue: null
        },


        created_at: {
            type: Sequelize.STRING
        },


    }, {
        freezeTableName: true,
        timestamps: false
    });


    return AttendanceType;
}
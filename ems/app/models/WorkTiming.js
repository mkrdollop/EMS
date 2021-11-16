module.exports = (sequelize, Sequelize) => {

    const Worktiming = sequelize.define('user_work_timing', {
        work_time_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        work_time_type_id: {
            type: Sequelize.INTEGER,
            defaultValue: null
        },
        work_timing_name: {
            type: Sequelize.STRING,
            defaultValue: null

        },
        in_time: {
            type: Sequelize.STRING,
            defaultValue: null

        },
        out_time: {
            type: Sequelize.STRING,
            defaultValue: null

        },
        full_day_working_hour: {
            type: Sequelize.INTEGER,
            defaultValue: null
        },
        half_day_working_hour: {
            type: Sequelize.STRING,
            defaultValue: null

        },
        punch_in_notify_time: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        punch_out_notify_time: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        over_time_before_in: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        over_time_after_out: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        time_zone: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        work_time_content: {
            type: Sequelize.TEXT,
            defaultValue: null
        },
        is_default: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        created_at: {
            type: Sequelize.STRING,

        },
        updated_at: {
            type: Sequelize.STRING
        },

    }, {
        freezeTableName: true,
        timestamps: false
    });


    return Worktiming;
}
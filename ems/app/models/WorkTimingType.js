module.exports = (sequelize, Sequelize) => {

    const WorkTimingType = sequelize.define('work_timing_type', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type: {
            type: Sequelize.ENUM('day_fixed', 'night_fixed', 'day_flexy'),
            defaultValue: null
        },
        title: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        description: {
            type: Sequelize.TEXT,
            defaultValue: null
        },
        image: {
            type: Sequelize.STRING,
            defaultValue: null
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


    return WorkTimingType;
}
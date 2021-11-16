module.exports = (sequelize, Sequelize) => {

    const WorkTimeContent = sequelize.define('work_time_content', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            defaultValue: 0
        },
        content: {
            type: Sequelize.STRING,
            defaultValue: null
        },
       
        created_at: {
            type: Sequelize.STRING,

        },
       

    }, {
        freezeTableName: true,
        timestamps: false
    });


    return WorkTimeContent;
}
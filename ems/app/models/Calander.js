module.exports = (sequelize, Sequelize) => {

    const Calander = sequelize.define('calander', {  

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_type: {
            type: Sequelize.ENUM('default', 'user'),
            defaultValue: 'default'
        },
        user_id: {
            type: Sequelize.STRING
        },
        off_type: {
            type: Sequelize.ENUM('FD', 'HD', "WO"),
            defaultValue: 'FD'
        },

    }, {
        freezeTableName: true,
        timestamps: false
    });


    return Calander;
}

module.exports = (sequelize, Sequelize) => {

    const ReportsType = sequelize.define('reports_type', {

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },    
        title: {

            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        created_at: {

            type: Sequelize.STRING
        },

    }, {
        freezeTableName: true,
        timestamps: false
    });


    return ReportsType;
}
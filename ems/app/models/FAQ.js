
module.exports = (sequelize, Sequelize) => {

    const FAQ = sequelize.define('faq', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        content: {
            type: Sequelize.TEXT
        },
        created_at: {
            type: Sequelize.STRING,
            timestamps: true, 
        },
        updated_at: {
            type: Sequelize.STRING,
            timestamps: true,
        },
    },
    {
        freezeTableName: true,
        timestamps: false
    });

    return FAQ;
}
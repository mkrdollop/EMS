
module.exports = (sequelize, Sequelize) => {

    const AboutUs = sequelize.define('about', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        about: {
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

    return AboutUs;
}
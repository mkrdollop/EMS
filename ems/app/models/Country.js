module.exports = (sequelize, Sequelize) => {  
    const Country = sequelize.define('country', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sortname: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        currency_code: {
            type: Sequelize.STRING
        },
        currency_symbol: {
            type: Sequelize.STRING
        },
        currency_name: {
            type: Sequelize.STRING
        },
        phone_code: {
            type: Sequelize.STRING
        },
        capital: {
            type: Sequelize.STRING
        },
        unit: {
            type: Sequelize.STRING,
        },
        emergencyNumber: {
            type: Sequelize.STRING,
        },
        tax: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING,
        },
        

    }, {
        freezeTableName: true,
        timestamps: false
    });


    return Country;
}
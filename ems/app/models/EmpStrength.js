
module.exports = (sequelize, Sequelize) => {

    const EmpStrength = sequelize.define('emp_strength', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        strength: {
            type: Sequelize.STRING
        },
        created_at: {
            type: Sequelize.STRING
        },
        updated_at: {
            type: Sequelize.STRING,
        },


    }, {
        freezeTableName: true,
        timestamps: false
    });


    return EmpStrength;
}
module.exports = (sequelize, Sequelize) => {
    const privcy_policy = sequelize.define('privcy_policy', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        policy: {
            type: Sequelize.TEXT,
        },
        created_at: {
            type: Sequelize.STRING,
            timestamps: true, 

        },
        updated_at: {
            type: Sequelize.STRING,
            timestamps: true, 

        },

    }, {
        freezeTableName: true,
        timestamps: false
    });


    return privcy_policy;
}
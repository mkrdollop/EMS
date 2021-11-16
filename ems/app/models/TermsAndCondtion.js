module.exports = (sequelize, Sequelize) => {
    const Terms_and_policy = sequelize.define('terms_and_policy', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        terms: {
            type: Sequelize.INTEGER,
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


    return Terms_and_policy;
}
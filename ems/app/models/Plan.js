module.exports = (sequelize, Sequelize) => {

    const Plan = sequelize.define('plan', {

        plan_id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        plan_name: {
            type: Sequelize.STRING
        },
        plan_type: {
            type: Sequelize.ENUM('Monthly','Yearly','Weekly'),
            defaultValue:'Monthly'
        },
        plan_feature: {
            type: Sequelize.STRING
        },
        plan_amount: {
            type: Sequelize.STRING
        },
      
        plan_description: {
            type: Sequelize.TEXT
        },
        is_active: {
            type: Sequelize.BOOLEAN,      //1 - active, 0 - deactive
            defaultValue: 1
        },
        is_deleted: {
            type: Sequelize.BOOLEAN , //1 - not deleted, 0 - deleted
            defaultValue: 0
            
        },   
        created_at: {
            type: Sequelize.STRING
        },
        updated_at: {
            type: Sequelize.STRING
        },

    }, {
        freezeTableName: true,
        timestamps: false
    });


    return Plan;
}
module.exports = (sequelize, Sequelize) => {

    const DepartmentBranch = sequelize.define('user_department_branch', {  

        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.STRING
        },
        department: {
            type: Sequelize.STRING
        },
        is_default: {
            type: Sequelize.BOOLEAN,
            defaultValue:0
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


    return DepartmentBranch;
}
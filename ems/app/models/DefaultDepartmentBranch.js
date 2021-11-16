module.exports = (sequelize, Sequelize) => {
    //var current_date = new Date();
    const DefaultDepartmentBranch = sequelize.define('default_department_branch', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        department: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        is_default: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        created_at: {
            type: Sequelize.STRING,

        }
        

    }, {
        freezeTableName: true,
        timestamps: false
    });


    return DefaultDepartmentBranch;
}
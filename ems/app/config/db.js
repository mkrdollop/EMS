/* const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database

const connection = mysql.createConnection({
  connectionLimit : 10,
  port     :  dbConfig.PORT,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

connection.connect((err,res) => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = connection; */

///////////////////////////////////
const mysql = require("mysql");
const dbConfig = require("./db.config.js");
const Sequelize = require("sequelize");

const connection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
  operatorsAliases: 0,
  //port: dbConfig.PORT,
  
    /* pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    } */
});

const db = {};

db.Sequelize = Sequelize;
db.connection = connection;


/*========
 Common config model
=========*/
db.User = require('../models/User.js')(connection, Sequelize);
db.Country = require('../models/Country.js')(connection, Sequelize);
db.EmpStrength = require('../models/EmpStrength.js')(connection, Sequelize);
db.WorkTiming = require('../models/WorkTiming.js')(connection, Sequelize);
db.WorkTimingType = require('../models/WorkTimingType.js')(connection, Sequelize);
db.Calander = require('../models/Calander.js')(connection, Sequelize);
db.DepartmentBranch = require('../models/DepartmentBranch.js')(connection, Sequelize);
db.DefaultDepartmentBranch = require('../models/DefaultDepartmentBranch.js')(connection, Sequelize);
db.DefaultWorktiming = require('../models/DefaultWorktiming.js')(connection, Sequelize);
db.Configuration = require('../models/Configuration.js')(connection, Sequelize);
db.Holiday = require('../models/Holiday.js')(connection, Sequelize);
db.HolidayYear = require('../models/HolidayYear.js')(connection, Sequelize);
db.ReportsType = require('../models/ReportsType.js')(connection, Sequelize);
db.WorkTimeContent = require('../models/WorkTimeContent.js')(connection, Sequelize);
db.Attendance = require('../models/Attendance.js')(connection, Sequelize);
db.BankDetails = require('../models/BankDetails.js')(connection, Sequelize);
db.Salary = require('../models/Salary.js')(connection, Sequelize);
db.AttendanceType = require('../models/AttendanceType.js')(connection, Sequelize);
db.Plan = require('../models/Plan.js')(connection, Sequelize);
db.Terms_and_policy = require('../models/TermsAndCondtion.js')(connection, Sequelize);
db.FAQ = require('../models/FAQ.js')(connection, Sequelize);
db.PrivacyAndPolicy = require("../models/PrivacyAndPolicy.js")(connection,Sequelize);
db.AboutUs = require("../models/AboutUs.js")(connection,Sequelize);
db.SupportChat = require("../models/SupportChat.js")(connection,Sequelize);
db.Admin = require("../models/Admin.js")(connection,Sequelize);
db.Notification = require("../models/Notification")(connection,Sequelize);


/////////////////////////////////config key

db.Country.hasMany(db.User, { foreignKey: 'country_id' });
db.User.belongsTo(db.Country, { foreignKey: 'country_id' });

db.User.hasMany(db.Salary, { foreignKey: 'user_id' });
db.Salary.belongsTo(db.User, { foreignKey: 'user_id' });

// db.User.hasMany(db.Salary, { foreignKey: 'user_id' });
// db.Salary.belongsTo(db.User, { foreignKey: 'user_id' });
/* db.WorkTiming.belongsTo(db.User, {foreignKey: 'work_time_id'});
db.Calander.belongsTo(db.User, {foreignKey: 'calander_id'});
db.Department_branch.belongsTo(db.User, {foreignKey: 'dept_branch_id'}); */
/* db.User.hasOne(db.WorkTiming, {foreignKey: 'work_time_id', targetKey: 'work_time_id'});
db.User.hasOne(db.Calander, {foreignKey: 'calander_id', targetKey: 'id'});
db.User.hasOne(db.Department_branch, {foreignKey: 'dept_branch_id', targetKey: 'id'});
/*======== 

=========/**/
//db.Country.hasOne(db.candidate_bio, { foreignKey: 'user_id' });

module.exports = db;





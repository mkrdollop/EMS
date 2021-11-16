var token_helper = require('../../helper/token_helper.js');
const db = require("../../config/db.js");
const language_helper = require("../../helper/language_helper");
const Common_helper = require("../../helper/Common_helper");
const { Op } = require("sequelize");
var current_date = new Date();
const dateTime = require('date-and-time');
const currentDateTime = dateTime.format(current_date, 'Y/M/D');
current_date = current_date.toISOString();
var Sequelizes = require('Sequelize');



/* ============
 add Employee
  ============ */
module.exports.add_employee = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var imei_id = typeof req.body.imei_id != 'undefined' ? req.body.imei_id : "";
    var dob = typeof req.body.dob != 'undefined' ? req.body.dob : "";
    var email = typeof req.body.email != 'undefined' ? req.body.email : "";
    var doj = typeof req.body.doj != 'undefined' ? req.body.doj : "";
    var fcm_id = typeof req.body.fcm_id != 'undefined' ? req.body.fcm_id : "";
    var device_type = typeof req.body.device_type != 'undefined' ? req.body.device_type : "";
    var admin_id = typeof req.body.admin_id != 'undefined' ? req.body.admin_id : "";
    var first_name = typeof req.body.first_name != 'undefined' ? req.body.first_name : "";
    var mobile = typeof req.body.mobile != 'undefined' ? req.body.mobile : "";
    var country_id = typeof req.body.country_id != 'undefined' ? req.body.country_id : "";
    var work_time_id = typeof req.body.work_time_id != 'undefined' ? req.body.work_time_id : "";
    var employee_id = typeof req.body.employee_id != 'undefined' ? req.body.employee_id : "";
    var bank_name = typeof req.body.bank_name != 'undefined' ? req.body.bank_name : "";
    var acc_no = typeof req.body.acc_no != 'undefined' ? req.body.acc_no : "";
    var ifsc_code = typeof req.body.ifsc_code != 'undefined' ? req.body.ifsc_code : "";
    var branch = typeof req.body.branch != 'undefined' ? req.body.branch : "";
    var salary_type = typeof req.body.salary_type != 'undefined' ? req.body.salary_type : "";
    var salary_amount = typeof req.body.salary_amount != 'undefined' ? req.body.salary_amount : "";
    var department_branch_id = typeof req.body.department_branch_id != 'undefined' ? req.body.department_branch_id : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            var UserData = {
                admin_id: data.user_id,
                language: language,
                role_type: 'Employee',
                first_name: first_name,
                dob: dob,
                fcm_id: fcm_id,
                doj: doj,
                email: email,
                password: Common_helper.passwordGenerator(),
                country_id: country_id,
                device_type: device_type,
                imei_id: imei_id,
                mobile: mobile,
                employee_id: employee_id,
                work_time_id: work_time_id,
                department_branch_id: department_branch_id,
                created_at: current_date
            }

            //console.log(UserData);
            if (first_name != "" && device_type != "" && mobile != "" && imei_id != "" && work_time_id != "") {

                db.User.findOne({ where: { mobile: mobile } }).then(users => {
                    if (!users) {
                        db.User.findOne({ where: { employee_id: employee_id } }).then(user => {
                            if (!user) {
                                db.User.create(UserData).then((result) => {
                                    // console.log(result.user_id);
                                    if (result) {
                                        var bankData = {
                                            role_type: "Employee",
                                            bank_name: bank_name,
                                            acc_no: acc_no,
                                            ifsc_code: ifsc_code,
                                            branch: branch,
                                            user_id: result.user_id,
                                            updated_at: current_date,
                                            created_at: current_date,

                                        }
                                        db.BankDetails.create(bankData).then((bank) => {
                                            console.log("bankAddd");
                                            console.log(bank);
                                        })
                                        var salaryData = {
                                            role_type: "Employee",
                                            salary_type: salary_type,
                                            salary_amount: salary_amount,
                                            updated_at: current_date,
                                            created_at: current_date,
                                            user_id: result.user_id

                                        }
                                        db.Salary.create(salaryData).then((salary) => {
                                            console.log("salary Add");
                                            console.log(salary);
                                        })
                                        //sendMessage();
                                        return res.status(200).json({
                                            message: lang.SUCCESS,
                                            // otp: otp
                                        });

                                    } else {

                                        return res.status(400).json({
                                            message: lang.FAILED,

                                        });
                                    }
                                });
                            }
                            else {
                                return res.status(400).json({
                                    message: lang.EMP_ID_ALREADY_EXIST,

                                });
                            }
                        });
                    }
                    else {
                        if (users.is_register == 0) {
                            db.User.findOne({ where: { employee_id: employee_id } }).then(user => {
                                if (!user) {
                                    updateValues = {
                                        admin_id: data.user_id,
                                        language: language,
                                        role_type: 'Employee',
                                        first_name: first_name,
                                        dob: dob,
                                        fcm_id: fcm_id,
                                        doj: doj,
                                        email: email,
                                        password: Common_helper.passwordGenerator(),
                                        country_id: country_id,
                                        device_type: device_type,
                                        imei_id: imei_id,
                                        mobile: mobile,
                                        employee_id: employee_id,
                                        work_time_id: work_time_id,
                                        department_branch_id: department_branch_id,
                                        updated_at: current_date
                                    }
                                    db.User.update(updateValues,
                                        {
                                            where:
                                            {
                                                user_id: users.user_id,

                                            }
                                        }).then((result) => {
                                            return res.status(200).json({
                                                message: lang.SUCCESS,
                                            });

                                        });
                                }
                                else {
                                    return res.status(400).json({
                                        message: lang.EMP_ID_ALREADY_EXIST,

                                    });
                                }
                            });
                        }
                        else {
                            return res.status(400).json({
                                message: lang.ALREDY_EXIST,

                            });
                        }

                    }

                });

            }
            else {
                res.status(400).json({
                    message: lang.ALL_REQUIRED,
                    userData: UserData
                });
            }
        }
        else {
            res.status(400).json({
                message: lang.INVALID_TOKEN
            });
        }
    }
    else {

        res.status(400).json({
            message: lang.TOKEN_REQUIRED
        });
    }

}

/* ============
get Employee
============= */
module.exports.get_employee = (req, res) => {
    var authheader = req.headers.authorization;
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var type = typeof req.query.type != 'undefined' ? req.query.type : "";///today_punch
    var filter = typeof req.query.filter != 'undefined' ? req.query.filter : "";///name/punched/not_punched
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);

        if (data) {
            let querys;
            let results = [];
            let finalData = [];
            async function getResults() {
                querys = `SELECT user.user_id,user.department_branch_id,user.admin_id,user.employee_id,user.role_type,user.first_name,
                        user.mobile,user.email,user.password,user.profile_pic,user.dob,user.doj,salary.salary_type,salary.salary_type,bank_detail.bank_name,bank_detail.acc_no,bank_detail.ifsc_code,bank_detail.branch
                        FROM user
                        LEFT JOIN salary ON salary.user_id = user.user_id
                        LEFT JOIN bank_detail ON bank_detail.user_id = user.user_id
                        WHERE admin_id =  `+ data.user_id + ` `;
                if (filter == "name") {
                    querys += " ORDER BY user.first_name DESC";
                }
                let userData = await db.connection.query(querys, { type: Sequelizes.QueryTypes.SELECT })
                if (type == "today_punch") {
                    for (let emp of userData) {
                        var query = "SELECT * FROM `attendance` WHERE (CONVERT(created_at,date)) = '" + currentDateTime + "' AND user_id = '" + emp.user_id + "'";
                        let empPunch = await db.connection.query(query, { type: Sequelizes.QueryTypes.SELECT })
                        console.log("empPunch")
                        console.log(empPunch.length)
                        if (empPunch.length != 0) {
                            emp.is_punch = 1;
                        }
                        else {
                            emp.is_punch = 0;
                        }
                        if (filter == "Employee Punched") {
                            if (emp.is_punch == 1) {
                                finalData.push(emp);

                            }
                        }
                        else if (filter == "Employee Not Punched") {
                            if (emp.is_punch == 0) {
                                finalData.push(emp);

                            }
                        }
                        else {

                            emp.is_punch = 0;

                            finalData.push(emp);

                        }
                        results = finalData;
                    }
                }
                else {
                    results = userData;
                }
                //console.log(results);
                return results;
            }
            getResults().then(results => {
                return res.status(200).json({
                    message: lang.SUCCESS,
                    employee: results
                });
            }).catch(err => {
                return res.status(200).json({
                    message: "err",
                    employee: finalData
                });
            });
        }
        else {
            res.status(400).json({
                message: lang.INVALID_TOKEN
            });
        }
    }
    else {
        res.status(400).json({
            message: lang.TOKEN_REQUIRED
        });
    }


}

/******
 * Get employee by id
**********/

module.exports.get_employee_by_id = (req, res) => {
    var authheader = req.headers.authorization;
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var emp_id = typeof req.query.emp_id != 'undefined' ? req.query.emp_id : "";///today_punch

    var lang = language_helper.load_language(language);

    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);

        if (data) {
            let querys;
            let results = [];
            let finalData = [];
            async function getResults() {
                querys = `SELECT user.user_id,user.work_time_id,user.admin_id,user.employee_id,user.role_type,user.first_name,
                        user.mobile,user.email,user.password,user.profile_pic,user.dob,user.doj,salary.salary_type,salary.salary_type,
                        bank_detail.bank_name,bank_detail.acc_no,bank_detail.ifsc_code,bank_detail.branch,user_work_timing.work_timing_name
                        FROM user
                        LEFT JOIN salary ON salary.user_id = user.user_id
                        LEFT JOIN user_work_timing ON user_work_timing.work_time_id = user.work_time_id
                        LEFT JOIN bank_detail ON bank_detail.user_id = user.user_id
                        WHERE admin_id =  `+ emp_id + ` `;

                let userData = await db.connection.query(querys, { type: Sequelizes.QueryTypes.SELECT })
                // console.log(userData);

                for (let emp of userData) {
                    var query = "SELECT * FROM `attendance` WHERE  user_id = '" + emp_id + "'";
                    let empPunch = await db.connection.query(query, { type: Sequelizes.QueryTypes.SELECT })
                    console.log("empPunch")
                    console.log(empPunch.length)
                    if (empPunch.length != 0) {
                        emp.is_punch = 0;
                    }
                    else {
                        emp.is_punch = 0;
                    }

                    emp.punch_data = finalData
                    results = emp;
                }
                return results;
            }

            getResults().then(results => {
                // process results here

                return res.status(200).json({
                    message: lang.SUCCESS,
                    employee: results
                });
            }).catch(err => {
                // process error here
                console.log(err);
                return res.status(200).json({
                    message: "err",
                    employee: finalData
                });
            });
        }
        else {
            res.status(400).json({
                message: lang.INVALID_TOKEN
            });
        }
    }
    else {
        res.status(400).json({
            message: lang.TOKEN_REQUIRED
        });
    }


}

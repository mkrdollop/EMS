const express = require('express');
const app = new express();
var md5 = require('md5');
var token_helper = require('../../helper/token_helper.js');
const db = require("../../config/db.js");
const language_helper = require("../../helper/language_helper");
const Common_helper = require("../../helper/Common_helper");
var multer = require('multer');
var multipart = require('connect-multiparty');
//var multipartMiddleware = multipart();
var path = require('path');
var Sequelizes = require('Sequelize');


var current_date = new Date();
current_date = current_date.toISOString();

var FormData = require('form-data');

var form = new FormData();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = "./uploads/" + file.fieldname;
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})


var upload = multer({ storage: storage });


/*******
 * @use:get user work timing
 * @param:token
 * @method:get
 * @response:OK 
  ********** */
 
module.exports.change_forgot_password = (req, res) => {

    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var user_id = typeof req.body.user_id != 'undefined' ? req.body.user_id : "";
    var password = typeof req.body.password != 'undefined' ? req.body.password : "";
    var lang = language_helper.load_language(language);
    var userData = {
        user_id: user_id,
        password: password,
        language: language
    }
    if (language != "" && user_id != "" && password != "") {
        db.User.findAll({ where: { user_id: user_id, } }).then(user => {
            var updateValues = { password: md5(password), updated_at: current_date };
            if (user) {
                db.User.update(updateValues,
                    {
                        where:
                        {
                            user_id: user_id
                        }
                    }).then((result) => {

                        return res.status(200).json({
                            message: lang.SUCCESS,
                        });

                    });
            } else {
                res.status(400).json({
                    message: lang.INVALID_USER,
                    token: "",
                    userData: ""
                });
            }

        });
    }
    else {
        res.status(400).json({
            message: lang.ALL_REQUIRED,
            userData: userData


        });
    }
}

/*******
 * @use:get user work timing
 * @param:token
 * @method:get
 * @response:OK 
  ********** */
module.exports.change_user_password = (req, res) => {

    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var new_password = typeof req.body.new_password != 'undefined' ? req.body.new_password : "";
    var old_password = typeof req.body.old_password != 'undefined' ? req.body.old_password : "";
    var lang = language_helper.load_language(language);
    var header = req.headers.authorization;
    var userData = {
        new_password: new_password,
        old_password: old_password,
        language: language
    }
    
     
    if (language != "" && new_password != "" && old_password != "") {
        if (header) {
            var data = token_helper.verifyJwtToken(header);
            if (data) {
                db.User.findOne({ where: { user_id: data.user_id, password: md5(old_password) } }).then(user => {
                    if (user) {
                        var updateValues = { password: md5(new_password), updated_at: current_date };
                        db.User.update(updateValues,
                            {
                                where:
                                {
                                    user_id: data.user_id
                                }
                            }).then((result) => {

                                return res.status(200).json({
                                    message: lang.SUCCESS,
                                });

                            });
                    } else {
                        res.status(400).json({
                            message: lang.WRONG_PASSWORD,
                            
                        });
                    }

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
    else {
        res.status(400).json({
            message: lang.ALL_REQUIRED,
            userData: userData


        });
    }

}

/*******
 * @use:get user profile(admin)
 * @param:token
 * @method:get
 * @response:OK 
  ********** */
module.exports.get_user_profile = (req, res) => {

    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var lang = language_helper.load_language(language);
    var header = req.headers.authorization;
    if (header) {
        var data = token_helper.verifyJwtToken(header);
        if (data) {
            var user_id = typeof req.body.user_id != 'undefined' ? req.body.user_id : "";

            if(data.role_type=="Admin_User" || data.role_type=="Employee"){
                user_id = data.user_id ;
            }
            // console.log(user_id);
            querys =`SELECT user.*,emp_strength.strength
                    FROM user
                    LEFT JOIN emp_strength ON emp_strength.id = user.emp_strength_id
                    WHERE user_id = `+ user_id + ` `;
            db.connection.query(querys, { type: Sequelizes.QueryTypes.SELECT, plain: true, })
                .then(function (user) {
                    if (user) {

                        return res.status(200).json({
                            message: lang.SUCCESS,
                            userData: user
                        });

                    } else {
                        res.status(400).json({
                            message: lang.NOT_FOUND,
                        });
                    }
                });
           /*  db.User.findOne({ where: { user_id: data.user_id, } }).then(user => {
                
            }); */
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

/*******
 * @use:update user 
 * @param:token
 * @method:get
 * @response:OK 
  ********** */

module.exports.update_user_profile = (req, res) => {
    //var form = new FormData();
    
    var header = req.headers.authorization;
    var lang = language_helper.load_language("English");
    if (header) {    
        var data = token_helper.verifyJwtToken(header);
       
        if (data) {
            
            const cpUpload = upload.fields([{ name: 'banner', maxCount: 1 }, { name: 'logo', maxCount: 1 }]);

            cpUpload(req, res, function (err) {
                
                var user_id = typeof req.body.user_id != 'undefined' ? req.body.user_id : "English";
                var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
                var company_name = typeof req.body.company_name != 'undefined' ? req.body.company_name : "";
                var first_name = typeof req.body.first_name != 'undefined' ? req.body.first_name : "";
                var emp_strength_id = typeof req.body.emp_strength_id != 'undefined' ? req.body.emp_strength_id : "";
                var dob = typeof req.body.dob != 'undefined' ? req.body.dob : "";
                var doj = typeof req.body.doj != 'undefined' ? req.body.doj : "";
                var work_time_id = typeof req.body.work_time_id != 'undefined' ? req.body.work_time_id : "";
                var calander_id = typeof req.body.calander_id != 'undefined' ? req.body.calander_id : "";
                var dept_branch_id = typeof req.body.dept_branch_id != 'undefined' ? req.body.dept_branch_id : "";
                var banner = typeof req.files.banner != 'undefined' ? req.files.banner : "";
                var logo = typeof req.files.logo != 'undefined' ? req.files.logo : "";
                
                var lang = language_helper.load_language(language);

                if(data.role_type=="Admin_User" || data.role_type=="Employee"){
                    user_id = data.user_id ;
                }
            
                var updateValues = [];
                if (first_name != "") {
                    updateValues['first_name'] = first_name;
                }
                if (company_name != "") {
                    updateValues['company_name'] = company_name;
                }
                if (language != "") {
                    updateValues['language'] = language;
                }
                if (emp_strength_id != "") {
                    updateValues['emp_strength_id'] = emp_strength_id;
                }
                if (dob != "") {
                    updateValues['dob'] = dob;
                }
                if (doj != "") {
                    updateValues['doj'] = doj;
                }
                if (calander_id != "") {
                    updateValues['calander_id'] = calander_id;
                }
                if (dept_branch_id != "") {
                    updateValues['dept_branch_id'] = dept_branch_id;
                }
                if (work_time_id != "") {
                    updateValues['work_time_id'] = work_time_id;
                }
                
                if (banner != "") {
                    updateValues['banner'] = req.files.banner[0].path;
                }
                if (logo != "") {
                    updateValues['logo'] = req.files.logo[0].path;
                }
                
                if (language != "" || first_name != "" || company_name != "" || emp_strength_id != "" || dob != "" || doj != "" || calander_id != "" || dept_branch_id != "" || work_time_id != "" || banner != "" || logo!=""){
                
                    db.User.update(updateValues,
                    {
                        where:
                        {
                            user_id: user_id
                        }
                    }).then((result) => {
                        return res.status(200).json({
                            message: lang.SUCCESS,
                        });

                    });
                }else{
                    res.status(400).json({
                        message: lang.INVALID_TOKEN
                    });
                }
            });

        }
        else {
            res.status(400).json({
                message: lang.ALL_REQUIRED
            });
        }
        
    }
    else {
        res.status(400).json({
            message: lang.TOKEN_REQUIRED
        });
    }


}

/*******
 * @use:update user fcm id
 * @param:token
 * @method:get
 * @response:OK 
  ********** */
module.exports.update_fcm_id = (req, res) => {

    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var fcm_id = typeof req.body.fcm_id != 'undefined' ? req.body.fcm_id : "";
    var lang = language_helper.load_language(language);
    var header = req.headers.authorization;
    if (header) {
        var data = token_helper.verifyJwtToken(header);
        if (data) {

            var updateValues = { fcm_id: fcm_id, updated_at: current_date };
            db.User.update(updateValues,
                {
                    where:
                    {
                        user_id: data.user_id
                    }
                }).then((result) => {

                    return res.status(200).json({
                        message: lang.SUCCESS,
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

/*******
 * @use:remove logo/banner
 * @param:token
 * @method:get
 * @response:OK 
  ********** */
module.exports.remove_logo_banner = (req, res) => {

    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var remove_key = typeof req.body.remove_key != 'undefined' ? req.body.remove_key : "";/////banner/logo
    var lang = language_helper.load_language(language);
    var header = req.headers.authorization;
    if (header) {
        var data = token_helper.verifyJwtToken(header);
        if (data) {
            console.log(remove_key);
            if (remove_key=="banner")
            {
                var updateValues = { banner: "", updated_at: current_date };
            }
            else
            {
                var updateValues = { logo: "", updated_at: current_date };
            }
            db.User.update(updateValues,
                {
                    where:
                    {
                        user_id: data.user_id
                    }
                }).then((result) => {
                    return res.status(200).json({
                        message: lang.SUCCESS,
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

module.exports.delete_suspend_user = (req, res) => {

    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var user_id = typeof req.body.user_id != 'undefined' ? req.body.user_id : "";
    var is_deleted = typeof req.body.is_deleted != 'undefined' ? req.body.is_deleted : "";
    var lang = language_helper.load_language(language);
    var header = req.headers.authorization;
    if (header) {
        var data = token_helper.verifyJwtToken(header);
        if (data) {
            if (is_deleted == "Deleted") {
                $sql = `Delete from bank_detail where user_id = '` + user_id + `';
                        Delete from user_department_branch where user_id = '`+ user_id + `';
                        Delete from holiday_year where user_id = '`+ user_id + `';
                        Delete from holidays where user_id = '`+ user_id + `';
                        Delete from calander where user_id = '`+ user_id + `';
                        Delete from salary where user_id = '`+ user_id + `';
                        Delete from attendance where user_id = '`+ user_id + `';
                        Delete from user where user_id = '`+ user_id + `'`;
                db.connection.query(querys, { type: Sequelizes.QueryTypes.SELECT })
                    .then(function (attendance) {
                    }
                    );
            }
            var updateValues = { is_deleted: is_deleted, updated_at: current_date.toISOString() };
            db.User.update(updateValues,
                {
                    where:
                    {
                        user_id: user_id
                    }
                }).then((result) => {

                    return res.status(200).json({
                        message: lang.SUCCESS,
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

module.exports.add_bank_salary = (req, res) => {

    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var fcm_id = typeof req.body.fcm_id != 'undefined' ? req.body.fcm_id : "";
    var salary_type = typeof req.body.salary_type != 'undefined' ? req.body.salary_type : "";
    var user_id = typeof req.body.user_id != 'undefined' ? req.body.user_id : "";
    var salary_amount = typeof req.body.salary_amount != 'undefined' ? req.body.salary_amount : "";
    var bank_name = typeof req.body.bank_name != 'undefined' ? req.body.bank_name : "";
    var acc_no = typeof req.body.acc_no != 'undefined' ? req.body.acc_no : "";
    var ifsc_code = typeof req.body.ifsc_code != 'undefined' ? req.body.ifsc_code : "";
    var branch = typeof req.body.branch != 'undefined' ? req.body.branch : "";
    var bank_id = typeof req.body.bank_id != 'undefined' ? req.body.bank_id : "";
    var salary_id = typeof req.body.salary_id != 'undefined' ? req.body.salary_id : "";
    var bank_id = typeof req.body.bank_id != 'undefined' ? req.body.bank_id : "";
    var lang = language_helper.load_language(language);
    var header = req.headers.authorization;
    if (header) {
        var data = token_helper.verifyJwtToken(header);
        if (data) {
            var res1 = 0;
            var r = 0;
            var res2 = "";
            if (user_id != "") {
                user_id = user_id;
            }
            else {
                user_id = data.user_id
            }
            if ((salary_type != "" && salary_amount != "") || (bank_name != "" && acc_no != "" && ifsc_code != "" && branch != ""))


                if (salary_id != "") {
                    var updateValues = { salary_type: salary_type, salary_amount: salary_amount, updated_at: current_date.toString() };
                    res2 = function add(data) {
                        return db.Salary.update(updateValues,
                            {
                                where:
                                {
                                    user_id: user_id
                                }
                            }).then();
                    }
                }
                else if (bank_id != "") {

                    var updateBankValues = { bank_name: bank_name, acc_no: acc_no, ifsc_code: ifsc_code, branch: branch, updated_at: current_date.toString() };
                    res2 = function add(data) {
                        return db.BankDetails.update(updateBankValues,
                            {
                                where:
                                {
                                    user_id: user_id
                                }
                            }).then();
                    }
                }
                else {
                    if (salary_type != "" && salary_amount != "") {
                        var updateValues = { user_id: user_id, role_type: data.role_type, salary_type: salary_type, salary_amount: salary_amount, created_at: current_date.toString() };
                        res2 = function add(data) {
                            return db.Salary.create(updateValues).then();
                        }
                    }
                    if (bank_name != "" && acc_no != "" && ifsc_code != "" && branch != "") {
                        var updateBankValues = { bank_name: bank_name, acc_no: acc_no, ifsc_code: ifsc_code, branch: branch, created_at: current_date.toString(), user_id: data.user_id, role_type: data.user_id.role_type };
                        res2 = function add(data) {
                            return db.BankDetails.create(updateBankValues).then();
                        }
                    }
                }
            if (res2 != "") {
                let userToken = res2(data)
                userToken.then(function (r) {
                    return res.status(200).json({
                        message: lang.SUCCESS,
                    });
                })
            }
            else {
                return res.status(400).json({
                    message: lang.FAILED,

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
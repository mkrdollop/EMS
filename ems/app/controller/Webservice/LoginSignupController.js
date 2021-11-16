const express = require('express');
const app = new express();
var otpGenerator = require('otp-generator')
var md5 = require('md5');
var token_helper = require('../../helper/token_helper.js');
const db = require("../../config/db.js");
const language_helper = require("../../helper/language_helper");
const Common_helper = require("../../helper/Common_helper");
var md5 = require('md5');
const { Op } = require("sequelize");
const sequelize = require('sequelize');
var multer = require('multer');
var multipart = require('connect-multiparty');
//var multipartMiddleware = multipart();
var path = require('path');

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
});
var upload = multer({ storage: storage });

/* ============
get country
============= */
module.exports.get_all_country = (req, res) => {
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var lang = language_helper.load_language(language);
    db.Country.findAll().then(country => {
        if (!country) {
            //res.send("not found");
            res.status(200).json({
                
                message: lang.NOT_FOUND,
                country: country
            });
        }
        if (country) {
            res.status(200).json({ 
                message: lang.SUCCESS,
                country: country 
            });

        }
    });
}

/* ============
signup_first_step
============= */

module.exports.signup = (req, res) => {

    var mobile = typeof req.body.mobile != 'undefined' ? req.body.mobile : "";
    var role_type = typeof req.body.role_type != 'undefined' ? req.body.role_type : "";
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var device_type = typeof req.body.device_type != 'undefined' ? req.body.device_type : "";
    var country_id = typeof req.body.country_id != 'undefined' ? req.body.country_id : "";
    var lang = language_helper.load_language(language);
    // console.log(lang.NOT_FOUND);
    var userData = {
        "mobile": mobile,
        "role_type": role_type,
        "language": language,
        "device_type": device_type,
        "country_id": country_id
    };
    if (mobile != "" && role_type != "" && language != "" && device_type != "") {
        

        db.User.findOne({where:{ mobile: mobile }}).then(user => {
            
            if (user) {
                if (role_type == user.role_type) {
                    if (user.is_verified == 1) {
                        if (user.is_register == 1) {
                            if (user.is_deleted == 1) {
                                if (user.is_active == 1) {
                                    res.status(200).json({
                                        message: lang.SUCCESS,
                                        userData: user.user_id
                                    });
                                } else {
                                    res.status(400).json({
                                        message: lang.ACCOUNT_DEACTIVATED,
                                        userData: user.user_id
                                    });
                                }
                            } else {
                                res.status(400).json({
                                    message: lang.ACCOUNT_DEACTIVATED,
                                    userData: user.user_id
                                });

                            }


                        } else {
                            otp = otpGenerator.generate(4, { upperCase: false, specialChars: false, alphabets: false });
                            let updateValues = {
                                otp: otp, updated_at: current_date};
                            db.User.update(updateValues,
                                {
                                    where:
                                    {
                                        user_id: user.user_id
                                    }
                                }).then((result) => {
                                    //sendMessage();
                                    return res.status(201).json({
                                        message: lang.SUCCESS,
                                        otp: otp
                                    });

                                });

                        }
                    } else {
                        otp = otpGenerator.generate(4, { upperCase: false, specialChars: false, alphabets: false });
                        let updateValues = { otp: otp, country_id: country_id, updated_at: current_date};
                        db.User.update(updateValues,
                            {
                                where:
                                {
                                    user_id: user.user_id
                                }
                            }).then((result) => {
                                //sendMessage();
                                
                                return res.status(201).json({
                                    message: lang.SUCCESS,
                                    otp: otp
                                });

                            });
                    }

                }
                else {
                    res.status(400).json({
                        message: lang.USER_ACCOUNT,
                        userData: user.user_id
                    });
                }

            } else {
                if (role_type == 'Admin_User') {
                    otp = otpGenerator.generate(4, { upperCase: false, specialChars: false, alphabets: false });
                    var userDetail = { 
                        otp: otp, 
                        mobile: mobile, 
                        role_type: role_type, 
                        country_id: country_id, 
                        language: language, 
                        device_type: device_type ,
                        created_at: current_date ,
                        updated_at: current_date ,
                    };
                    db.User.create(userDetail).then((result) => {
                        if (result) {
                            //sendMessage();
                            return res.status(201).json({
                                message: lang.SUCCESS,
                                otp: otp
                            });

                        } else {

                            return res.status(400).json({
                                message: lang.FAILED,
                                otp: "",

                            });
                        }
                    });
                }
                else {
                    return res.status(400).json({
                        message: lang.INVALID_LOGIN,
                        otp: "",
                    });
                }

            }

        });
    } else {
        res.status(400).json({
            message: lang.ALL_REQUIRED,
            userData: userData
        });
    }
}


/*************************************** */

module.exports.match_otp = (req, res) => {
   
    var mobile = typeof req.body.mobile != 'undefined' ? req.body.mobile : "";
    var otp = typeof req.body.otp != 'undefined' ? req.body.otp : "";
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
  //  var role_type = typeof req.body.role_type != 'undefined' ? req.body.role_type : "";
    var type = typeof req.body.type != 'undefined' ? req.body.type : ""; //// type: forgot_password / signup

    var lang = language_helper.load_language(language);
    var userData = {
        "mobile": mobile,
      //  "role_type": role_type,
        "language": language,
        "type": type,
        "otp": otp
    };
    if (mobile != "" && language != "" && type != "" && otp != "") {

        if (type =="signup") {
            db.User.findOne({where:{ mobile: mobile, otp: otp }}).then(user => {
                
                if (user) {
                   // console.log(user.user_id);
                    let updateValues = { is_verified: 1, updated_at: current_date};
                    db.User.update(updateValues,
                        {
                            where:
                            {
                                user_id: user.user_id
                            }
                        }).then((result) => {    
                            
                            return res.status(200).json({
                                message: lang.SUCCESS,
                                userData: user.user_id
                            });

                        });
                    
                } else {
                    return res.status(400).json({
                        message: lang.INVALID_OTP,

                    });
                }
            });
        }
        else{
            db.User.findOne({ where:{ mobile: mobile, otp: otp,is_register:1 }}).then(user => {
                if (user) {
                    res.status(200).json({
                        message: lang.SUCCESS,
                        userData: user.user_id
                    });
                } else {
                    return res.status(400).json({
                        message: lang.SOMETHING_WRONG,
                        userData: userData
                    });
                }
            });
        }
       
    } else {
        res.status(400).json({
            message: lang.ALL_REQUIRED,
            userData: userData
        });
    }
}

/***************** resend otp ********************** */

module.exports.resend_otp = (req, res) => {
   
    var mobile = typeof req.body.mobile != 'undefined' ? req.body.mobile : "";  
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";   
    var lang = language_helper.load_language(language);
    var userData = {
        "mobile": mobile,     
        "language": language,     
    };
    if (mobile != "" && language != "" ) {   
            db.User.findOne({where:{ mobile: mobile }}).then(user => {                
                if (user) {  
                    otp =  Common_helper.otpGenerator();                                    
                    let updateValues = { otp: otp, updated_at: current_date };
                    db.User.update(updateValues,
                        {
                            where:
                            {
                                user_id: user.user_id
                            }
                        }).then((result) => {    
                            
                            return res.status(200).json({
                                message: lang.SUCCESS,
                                userData: user.user_id,
                                otp:otp
                            
                            });

                        });
                    
                } else {
                    return res.status(400).json({
                        message: lang.FAILED,

                    });
                }
            });
       
    } else {
        res.status(400).json({
            
            message: lang.ALL_REQUIRED,
            userData: userData
        });
    }
}

/**************email verifcation*********************** */
module.exports.email_varification = (req, res) => {
  
    var email = typeof req.body.email != 'undefined' ? req.body.email : "";  
    var user_id = typeof req.body.user_id != 'undefined' ? req.body.user_id : "";  
    var first_name = typeof req.body.first_name != 'undefined' ? req.body.first_name : "";  
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";   
    var lang = language_helper.load_language(language);
    var userData = {
        "first_name": first_name,     
        "email": email,     
        "user_id": user_id,     
        "language": language,     
    };
    if (email != "" && language != "" && user_id != "" && first_name != "" ) {   
        db.User.findOne({ where: { email: email, is_register: 1, user_id: { [Op.ne]: user_id}}}).then(user => {
           // console.log(user);
                if (!user) {                                                         
                    let updateValues = { email: email, first_name: first_name, updated_at: current_date};
                    db.User.update(updateValues,
                        {
                            where:
                            {
                                user_id: user_id
                            }
                        }).then((result) => {    
                            
                            return res.status(200).json({                               
                                message: lang.SUCCESS,
                                userId: user_id
                            });

                        });
                    
                } else {                  
                    res.status(400).send({message: lang.ALREDY_EXIST});
                   
                }
            });
       
    } else {
        res.status(400).json({           
            message: lang.ALL_REQUIRED,
            userId: userData
        });
    }
}

/* ============
get employee strength
============= */
module.exports.get_emp_strength = (req, res) => {
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var lang = language_helper.load_language(language);
    db.EmpStrength.findAll().then(strength => {
        if (!strength) {
            //res.send("not found");
            res.status(200).json({

                message: lang.NOT_FOUND,
                emp_strength: strength
            });
        }
        if (strength) {
            res.status(200).json({
                message: lang.SUCCESS,
                emp_strength: strength
            });

        }
    });
}


/**************complete registeraion*********************** */
module.exports.complete_signup = (req, res) => { 

    const cpUpload = upload.fields([{ name: 'logo', maxCount: 1 }]);

    cpUpload(req, res, function (err) {
  
        var fcm_id = typeof req.body.fcm_id != 'undefined' ? req.body.fcm_id : "";  
        var user_id = typeof req.body.user_id != 'undefined' ? req.body.user_id : "";  
        var imei_id = typeof req.body.imei_id != 'undefined' ? req.body.imei_id : "";  
        var password = typeof req.body.password != 'undefined' ? req.body.password : "";  
        var company_name = typeof req.body.company_name != 'undefined' ? req.body.company_name : "";  
        var emp_strength_id = typeof req.body.emp_strength_id != 'undefined' ? req.body.emp_strength_id : "";  
        var language = typeof req.body.language != 'undefined' ? req.body.language : "English";   
        if (req.files === null)
        {
          var  logo = "";

        }
        else
        {
            var logo = typeof req.files.logo != 'undefined' ? req.files.logo : "";

        }
        //console.log(req.files);
       /*  if ( req.files !="undefined")
        {

        } */
        
        var lang = language_helper.load_language(language);

        var userData = {
            "fcm_id": fcm_id,     
            "imei_id": imei_id,     
            "user_id": user_id,     
            "company_name": company_name,
            "emp_strength_id": emp_strength_id,
            // "work_time_id": work_time_id,     
            // "dept_branch_id": dept_branch_id,     
            // "calander_id": calander_id,     
            "password": password,     
            "language": language,     
        };
        
        //console.log(req.files.logo[0].path);
        if (fcm_id != "" && language != "" && user_id != "" && imei_id != "" && password != "" && company_name != "" && emp_strength_id!="") {
            
            
            db.User.findOne({ 
                where: { user_id: user_id }, 
                /* attributes: [['country_name', '']],
                include: [
                    { 
                        model: db.Country, 
                        attributes: [['id', 'country_id'],['name','country_name']]
                    }
                ] */
            }).then(user => {
                //console.log(user);
                    if (user) {                                                         
                        let updateValues = {                       
                        
                            fcm_id:fcm_id,
                            imei_id:imei_id,
                            password:md5(password),
                            company_name: company_name,
                            emp_strength_id: emp_strength_id,
                            is_register:1,
                            language:language,
                            updated_at: current_date,
                        };
                        if (logo != "") {
                            updateValues['logo'] = req.files.logo[0].path;
                        }
                        db.User.update(updateValues,
                            {
                                where:
                                {
                                    user_id: user_id
                                }
                            }).then((result) => {    
                            /*******
                                * notification for greetings
                                * Send greetings mesage
                                * **** */

                            /* ============= add default worktime =========== */
                            db.DefaultWorktiming.findAll().then((workTime) => {
                                workTime.forEach(element => {
                                    var workTimeData = {
                                        user_id: user_id,
                                        work_time_type_id: element.work_time_type_id,
                                        work_timing_name: element.work_timing_name,
                                        in_time: element.in_time,
                                        out_time: element.out_time,
                                        full_day_working_hour: element.full_day_working_hour,
                                        half_day_working_hour: element.half_day_working_hour,
                                        punch_in_notify_time: element.punch_in_notify_time,
                                        punch_out_notify_time: element.punch_out_notify_time,
                                        over_time_before_in: element.over_time_before_in,
                                        over_time_after_out: element.over_time_after_out,
                                        time_zone: element.time_zone,
                                        auto_clock_out: element.auto_clock_out,
                                        is_default: element.is_default,
                                        created_at: current_date,
                                        updated_at: current_date,
                                    };
                                    db.WorkTiming.create(workTimeData).then((res) => {
                                        if(element.is_default==1){
                                            
                                            db.User.update({ 'work_time_id': res.work_time_id},
                                                {
                                                    where:
                                                    {
                                                        user_id: user_id
                                                    }
                                                }).then();
                                        }

                                    });
                                });


                            });

                            /* ============= add default department branch =========== */
                            db.DefaultDepartmentBranch.findAll().then((departmentBranch) => {
                                departmentBranch.forEach(element => {
                                    var departmentBranchData = {
                                        user_id: user_id,
                                        department: element.department,
                                        is_default: element.is_default,
                                        created_at: current_date,
                                        updated_at: current_date,
                                    };
                                    db.DepartmentBranch.create(departmentBranchData).then((res) => {
                                        if (element.is_default == 1) {

                                            db.User.update({ 'department_branch_id': res.id },
                                                {
                                                    where:
                                                    {
                                                        user_id: user_id
                                                    }
                                                }).then();
                                        }

                                    });
                                });
                            });
                            
                            /* ============= add default configuration =========== */
                            
                            var configurationData = {
                                user_id: user_id,
                                created_at: current_date,
                                updated_at: current_date,
                            };
                            db.Configuration.create(configurationData).then();
                               
                            let query;

                            query = `SELECT user.*,country.name AS country,emp_strength.strength
                                    FROM user  
                                    LEFT JOIN country ON (country.id = user.country_id)
                                    LEFT JOIN emp_strength ON (emp_strength.id = user.emp_strength_id)
                                    WHERE user.user_id='`+ user_id + `'`;

                            db.connection.query(query, { type: db.Sequelize.QueryTypes.SELECT ,plain:true}).then((user)=>{
                                var tokenData = {
                                    user_id: user_id,
                                    role_type: user.role_type
                                };
                                var token = token_helper.createJwtToken(tokenData);
                                return res.status(200).json({
                                    message: lang.SUCCESS,
                                    token: token,
                                    userData: user
                                });
                            });
                            

                        });
                        
                    } else {                  
                        res.status(400).send({message: lang.NOT_EXIST});
                    
                    }
                });
        
        } else {
            res.status(400).json({           
                message: lang.ALL_REQUIRED,
                userData: userData
            });
        }
    });
}


/* ============
get work timing
============= */
module.exports.get_time_zone = (req, res) => {
  
    var authheader = req.headers.authorization;   
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";   
    var lang = language_helper.load_language(language);
    if(authheader)
    {
        var data = token_helper.verifyJwtToken(authheader);
       
        if(data)
        {
           
                if (timezones) {
                    res.status(200).json({ time_zone: timezones });
        
                }
                else{
                                    
                        res.status(200).json({
                            message: lang.NOT_FOUND
                        });
                }
           // }); 
        }
        else
        {
            res.status(400).json({            
                message: lang.INVALID_TOKEN
            });
        }          
    }
    else
    {
        res.status(400).json({            
            message: lang.TOKEN_REQUIRED
        });
    }
   
}

module.exports.login = (req, res) => {

    var mobile = typeof req.body.mobile != 'undefined' ? req.body.mobile : "";
    var password = typeof req.body.password != 'undefined' ? req.body.password : "";
    //var role_type = typeof req.body.role_type != 'undefined' ? req.body.role_type : "";
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var device_type = typeof req.body.device_type != 'undefined' ? req.body.device_type : "";
    var fcm_id = typeof req.body.fcm_id != 'undefined' ? req.body.fcm_id : "";
    var lang = language_helper.load_language(language);
    // console.log(lang.NOT_FOUND);
    var userData = {
        "mobile": mobile,
        "password": password,
        //"role_type": role_type,
        "language": language,
        "fcm_id": fcm_id,
        "device_type": device_type,
    };
    if (mobile != "" && password != "" && fcm_id != "" && language != "" && device_type != "") {

        /* query = `SELECT user.*,country.name AS country,emp_strength.strength
                    FROM user  
                    LEFT JOIN country ON (country.id = user.country_id)
                    LEFT JOIN emp_strength ON (emp_strength.id = user.emp_strength_id)
                    WHERE user.mobile='`+ mobile + `' AND password='` + md5(password)+`'`;

        db.connection.query(query, { type: db.Sequelize.QueryTypes.SELECT }).then(user => { */

        db.User.findOne({ where: { mobile: mobile, password: md5(password) } }).then(user => {
          
            if (user) {
                var tokenData = {
                    user_id: user.user_id,
                    role_type: user.role_type
                };
                var token = token_helper.createJwtToken(tokenData);
                let query = `SELECT user.*,country.name AS country,emp_strength.strength
                    FROM user  
                    LEFT JOIN country ON (country.id = user.country_id)
                    LEFT JOIN emp_strength ON (emp_strength.id = user.emp_strength_id)
                    WHERE user.user_id='`+ user.user_id + `'`;

                db.connection.query(query, { type: db.Sequelize.QueryTypes.SELECT, plain: true }).then(user => {
                    res.status(200).json({

                        message: lang.SUCCESS,
                        token: token,
                        userData: user
                    });
                });
                
            } else {
                res.status(400).json({
                    message: lang.INVALID_LOGIN,
                    token: "",
                    userData: ""

                });
            }

        });
    } else {
        res.status(400).json({
            message: lang.ALL_REQUIRED,
            userData: userData
        });
    }
}


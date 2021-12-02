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


module.exports.admin_login = (req, res) => {
    // console.log(req.body);
    var email = typeof req.body.email != 'undefined' ? req.body.email : "";
    var password = typeof req.body.password != 'undefined' ? req.body.password : "";
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";    
    var lang = language_helper.load_language(language);
    var userData = {
        "email": email,
        "password": password,      
    };
    if (email != "" && password != "" && language != "" ) {

        db.Admin.findOne({ where: { email: email, password: md5(password) } }).then(admin => {
            if (admin) {
                var tokenData = {
                    user_id: admin.admin_id,
                    role_type: "Admin"
                };
                var token = token_helper.createJwtToken(tokenData);

                res.status(200).json({
                    message: lang.SUCCESS,
                    token: token,
                    adminData: admin
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

module.exports.admin_forgot_password = (req, res) => {

    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var email = typeof req.body.email != 'undefined' ? req.body.email : "";
    var lang = language_helper.load_language(language);
    var userData = {
        email: email,
    }
    if (language != "" && email != "") {
        db.Admin.findOne({ where: { email: email, } }).then(admin_user => {
            console.log(admin_user);
            if (admin_user) {
                otp = otpGenerator.generate(4, { upperCase: false, specialChars: false, alphabets: false });
                let updateValues = {otp: otp, updated_at: current_date};
                console.log(otp);
                db.Admin.update(updateValues,
                    {
                        where:
                        {
                            admin_id: admin_user.admin_id
                        }
                    }).then((result) => {
                        //sendMessage();
                        return res.status(201).json({
                            message: lang.SUCCESS,
                            otp: otp
                        });

                    });

            } else {
                res.status(400).json({
                    message: lang.INVALID_USER,
                    otp: "",
                    message: "user not found"
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

module.exports.admin_match_otp = (req, res) => {
   
    var email = typeof req.body.email != 'undefined' ? req.body.email : "";
    var otp = typeof req.body.otp != 'undefined' ? req.body.otp : "";
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";

    var lang = language_helper.load_language(language);
    var userData = {
        email: email,
        language: language,
        otp: otp
    };
    if (email != "" && language != ""&& otp != "") {

        db.Admin.findOne({where:{ email: email, otp: otp }}).then(user => {
            if (user) {
                return res.status(200).json({
                    message: lang.SUCCESS,
                    admin_id: user.admin_id,
                });
            }
            else {
                return res.status(400).json({
                    message: lang.INVALID_OTP,
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

module.exports.admin_change_forgot_password = (req, res) => {

    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var admin_id = typeof req.body.admin_id != 'undefined' ? req.body.admin_id : "";
    var password = typeof req.body.password != 'undefined' ? req.body.password : "";
    var lang = language_helper.load_language(language);
    var userData = {
        admin_id: admin_id,
        password: password,
        language: language
    }
    if (language != "" && admin_id != "" && password != "") {
        db.Admin.findAll({ where: { admin_id: admin_id, } }).then(user => {
            var updateValues = { password: md5(password), updated_at: current_date };
            if (user) {
                db.Admin.update(updateValues,
                    {
                        where:
                        {
                            admin_id: admin_id
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




module.exports.admin_change_password = (req, res) => {

    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var new_password = typeof req.body.new_password != 'undefined' ? req.body.new_password : "";
    var old_password = typeof req.body.old_password != 'undefined' ? req.body.old_password : "";
    var lang = language_helper.load_language(language);
    var header = req.headers.authorization;
    var adminData = {
        new_password: new_password,
        old_password: old_password,
        language: language
    }
    
     
    if (language != "" && new_password != "" && old_password != "") {
        if (header) {
            var data = token_helper.verifyJwtToken(header);

            if (data) {
                console.log(data);
                db.Admin.findOne({ where: { admin_id: data.user_id, password: md5(old_password) } }).then(admin => {
                    // console.log(admin);

                    if (admin) {

                        var updateValues = { password: md5(new_password), updated_at: current_date };
                        db.Admin.update(updateValues,
                            {
                                where:
                                {
                                    admin_id: data.user_id
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
            adminData: adminData


        });
    }

}
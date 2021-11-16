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


module.exports.admin_get_user_list = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        console.log(data);
        if (data) {
            db.User.findAll({
                where: {
                    is_register: 1,                   
                    is_deleted: 1
                }
            }).then(function (users) {
                if (users.length != 0) {
                    return res.status(200).json({
                        message: lang.SUCCESS,
                        users: users
                    });
                }
                else {
                    res.status(400).json({
                        message: lang.FAILED,
                        users: []
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

////TO DO Monday
// module.exports.update_user_by_admin = (req, res) => {
//     var authheader = req.headers.authorization;
//     var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
//     var user_id = typeof req.body.user_id != 'undefined' ? req.body.user_id : "";
//     var is_active = typeof req.body.is_active != 'undefined' ? req.body.is_active : "";
//     var is_deleted= typeof req.body.is_deleted != 'undefined' ? req.body.is_deleted : "";
//     var lang = language_helper.load_language(language);
//     if (authheader) {
//         var data = token_helper.verifyJwtToken(authheader);
//         if (data) {
//             upadteValue = [];

//             if (user_id != "") {
//                 updateValues = {
//                     updated_at: current_date
//                 }
//                 if (admin_id != "") {
//                     updateValues.admin_id = admin_id;
//                 }
//                 if (employee_id != "") {
//                     updateValues.employee_id = employee_id;
//                 }
//                 if (role_type != "") {
//                     updateValues.role_type = role_type;
//                 }
//                 if (first_name != "") {
//                     updateValues.first_name = first_name;
//                 }
//                 if (first_name != "") {
//                     updateValues.first_name = first_name;
//                 }
//                 if (first_name != "") {
//                     updateValues.first_name = first_name;
//                 }
//                 if (is_active != "") {
//                     updateValues.is_active = is_active;
//                 }
//                 if (is_deleted != "") {
//                     updateValues.is_deleted = is_deleted;
//                 }
//                 if (plan_type != "") {
//                     updateValues.plan_type = plan_type;
//                 }
            
//             if(is_active !="")
//             {
//                 upadteValue.is_active = is_active;
//             }
//             if(is_deleted !="")
//             {
//                 upadteValue.is_deleted = is_deleted;
//             }
//             db.User.update(upadteValue,
//                 {
//                     where:
//                     {
//                         user_id: user_id,

//                     }
//                 }).then((result) => {
//                     return res.status(200).json({
//                         message: lang.SUCCESS,
//                     });

//                 });
//         }
//         else {
//             res.status(400).json({
//                 message: lang.INVALID_TOKEN
//             });
//         }
//     }
//     else {
//         res.status(400).json({
//             message: lang.TOKEN_REQUIRED
//         });
//     }
// }
// }
/* module.exports.update_user_by_admin = (req, res) => {
    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var user_id = typeof req.body.user_id != 'undefined' ? req.body.user_id : "";
    var is_active = typeof req.body.is_active != 'undefined' ? req.body.is_active : "";
    var is_deleted= typeof req.body.is_deleted != 'undefined' ? req.body.is_deleted : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            upadteValue = [];
            if(is_active !="")
            {
                upadteValue.is_active = is_active;
            }
            if(is_deleted !="")
            {
                upadteValue.is_deleted = is_deleted;
            }
            db.User.update(upadteValue,
                {
                    where:
                    {
                        user_id: user_id,

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
} */
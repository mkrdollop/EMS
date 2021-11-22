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
/* ============
get All user, role_type = Employee, Admin_User
============= */
module.exports.get_admin_dashboard= (req, res) => {
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
                querys = `SELECT 
                (SELECT COUNT(*) FROM user WHERE is_verified=1 AND is_register=1 AND is_active=1 AND is_deleted=1) AS total_user,
                (SELECT COUNT(*) FROM user WHERE role_type='Employee' AND is_verified=1 AND is_register=1 AND is_active=1 AND is_deleted=1) AS total_employee,
                (SELECT COUNT(*) FROM user WHERE role_type='Admin_User' AND is_verified=1 AND is_register=1 AND is_active=1 AND is_deleted=1) AS total_admin`;
             
                var userData = await db.connection.query(querys, { type: Sequelizes.QueryTypes.SELECT })
            
            }
           try{
            const result =  userData.getResults();
            return res.status(200).json({
                message: lang.SUCCESS,
                employee:"result"
            });
           }catch(err){
            return res.status(200).json({
                message: "err",
                employee: finalData
            });
        };
            // await getResults().then(result => {
            //     return res.status(200).json({
            //         message: lang.SUCCESS,
            //         employee:"result"
            //     });
            // }).catch(err => {
            //     return res.status(200).json({
            //         message: "err",
            //         employee: finalData
            //     });
            // });
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

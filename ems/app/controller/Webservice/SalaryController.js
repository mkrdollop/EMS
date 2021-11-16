const express = require('express');
const app = new express();
var md5 = require('md5');
var token_helper = require('../../helper/token_helper.js');
const db = require("../../config/db.js");
const language_helper = require("../../helper/language_helper");
const Common_helper = require("../../helper/Common_helper");
//var multipartMiddleware = multipart();
var path = require('path');
var Sequelizes = require('Sequelize');

var current_date = new Date();
current_date = current_date.toISOString();

var FormData = require('form-data');

var form = new FormData();


module.exports.get_salary = (req, res) => {

    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    var header = req.headers.authorization;
    if (header) {
        var data = token_helper.verifyJwtToken(header);
         
        if (data) {
            user_id=data.user_id;

            let query;

            query = `SELECT user.first_name AS user_name,salary.salary_amount,salary.salary_type,salary.role_type
            FROM user  
            LEFT JOIN salary ON (salary.user_id = user.user_id)
            WHERE user.admin_id='`+ user_id + `'`;

            db.connection.query(query, { type: db.Sequelize.QueryTypes.SELECT}).then((salaryData)=>{
                
                return res.status(200).json({
                    message: lang.SUCCESS,
                    salaryData: salaryData
                });
            });
        
        } else {                  
            res.status(400).send({message: lang.NOT_EXIST});

        }
    }
    else {
        res.status(400).json({
            message: lang.INVALID_TOKEN
        });
    }
}

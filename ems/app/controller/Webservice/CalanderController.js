
const { Op } = require("sequelize");
const express = require('express');
const app = new express();
var md5 = require('md5');
var token_helper = require('../../helper/token_helper.js');
const db = require("../../config/db.js");
const language_helper = require("../../helper/language_helper");
const Common_helper = require("../../helper/Common_helper");
var Currnetdate = new Date();
var path = require('path');
var current_date = new Date();
var current_date = current_date.toISOString();

var FormData = require('form-data');
const Sequelizes = require('sequelize');
const dateTime = require('date-and-time');
const currentDateTime = dateTime.format(Currnetdate, 'Y/M/D');

/* ============
add calander
============= */
module.exports.add_calander = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var date = typeof req.body.date != 'undefined' ? req.body.date : "";
    var off_type = typeof req.body.off_type != 'undefined' ? req.body.off_type : ""; ///FD=full-day,HD=half-day,WO=week-off 
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            calanderData = {
                user_type: "user",
                user_id: data.user_id,
                date: date,
                off_type: off_type,
                created_at: current_date,
                updated_at: current_date
            }
            db.Calander.create(calanderData)
                .then(function (result) {
                    if (result) {
                        return res.status(200).json({
                            message: lang.SUCCESS,
                        });
                    }
                    else {
                        return res.status(400).json({
                            message: lang.FAILED,
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

/************get calander************** */



module.exports.get_calander = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var month = typeof req.query.month != 'undefined' ? req.query.month : "";  ///count
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            user_id = data.user_id;
            if (month != "") {
                var querys = '';
                querys = "SELECT *  FROM `calander` WHERE user_id = '" + user_id + "' AND DATE_FORMAT(date,'%m') = '" + month + "' ";
                db.connection.query(querys, { type: Sequelizes.QueryTypes.SELECT })
                    .then(function (result) {
                        if (result) {
                            return res.status(200).json({
                                message: lang.SUCCESS,
                                employee: result
                            });
                        }
                        else {
                            res.status(400).json({
                                message: lang.FAILED,
                            });

                        }
                    });
            }
            else {
                let results = "";
                let finalData = [];
                let finalData01 = [];

                async function getResults() {
                    var i;
                    for (i = 1; i <= 12; i++) {
                        var query =`SELECT *,DATE_FORMAT(date,'%m') AS MONTH,DATE_FORMAT(date,'%M') AS month_name,
                                (SELECT COUNT(*) FROM calander WHERE off_type='FD' AND user_id = '` + user_id + `' AND DATE_FORMAT(date,'%m') = ` + i + `) AS h_count,
                                (SELECT COUNT(*) FROM calander WHERE off_type='WO' AND user_id='` + user_id + `'  AND DATE_FORMAT(date,'%m') =  ` + i + `) AS O_count 
                                FROM calander WHERE user_id='` + user_id + `' AND DATE_FORMAT(date,'%m') =  ` + i + ` 
                                GROUP BY MONTH`;

                        let calander = await db.connection.query(query, { type: Sequelizes.QueryTypes.SELECT, plain: true })
                        let basicData = {};
                        if (calander) {

                            basicData.O_count = calander.O_count;
                            basicData.h_count = calander.h_count;
                            basicData.month = i;
                        }
                        else {
                            basicData.O_count = 0;
                            basicData.h_count = 0;
                            basicData.month = i;
                           
                        }
                        finalData01.push(basicData);
                        var testdata = { test: 'test01' };
                        console.log(basicData);
                        finalData.push(testdata);
                    }
                    return results;
                }
                getResults().then(result1 => {
                    console.log("result");
                    return res.status(200).json({
                        message: lang.SUCCESS,
                        employee: finalData01
                    });
                }).catch(err => {
                    return res.status(200).json({
                        message: lang.FAILED,
                        employee: err
                    });
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







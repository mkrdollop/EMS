const { Op } = require("sequelize");
const express = require('express');
const app = new express();
var md5 = require('md5');
var token_helper = require("../../helper/token_helper.js");
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
get Employee
============= */
module.exports.get_attendance_type = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            db.AttendanceType.findAll()
                .then(function (attendanceType) {
                    if (attendanceType.length != 0) {
                        return res.status(200).json({
                            message: lang.SUCCESS,
                            employee: attendanceType
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
get Punch
============= */
module.exports.get_punch = (req, res) => {
    var lang = language_helper.load_language("English");
    var authheader = req.headers.authorization;
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        //console.log(data);
        if (data) {
            var user_id = typeof req.body.user_id != 'undefined' ? req.body.user_id: "";
            var language = typeof req.body.language != 'undefined' ? req.body.language: "English";
            var start_date = typeof req.body.start_date != 'undefined' ? req.body.start_date: "";
            var end_date = typeof req.body.end_date != 'undefined' ? req.body.end_date: "";
            
            if (user_id != "") {
                user_id = user_id
            }
            else {
                user_id = data.user_id
            }
            let empSql;
            empSql = "SELECT * FROM `attendance` WHERE  user_id = '" + user_id + "'  GROUP BY (CONVERT(created_at,date)) ORDER BY (CONVERT(created_at,date)) DESC";
            db.connection.query(empSql, { type: Sequelizes.QueryTypes.SELECT })
                    .then(function (punchData) {
                        console.log(punchData);
            }); 
                let query;
                query = "SELECT * FROM `attendance` WHERE  user_id = '" + user_id + "' ";
                if(start_date!="" && end_date!=""){
                    query += " AND  (CONVERT(created_at,date)) >= '" + start_date + "' AND (CONVERT(created_at,date)) < '" + end_date + "' ";

                }
                query += " ORDER BY attendance_id DESC ";
                db.connection.query(query, { type: Sequelizes.QueryTypes.SELECT })
                    .then(function (getpunch) {
                        // console.log(getpunch);
                        var presentCount = 0;
                        var absentCount = 0;
                        var workHour = 0;
                        if (getpunch.length != 0) {
                            for(var i =0; i<getpunch.length; i++){
                                if(getpunch[i]['attendance_type_id']==1){
                                    presentCount += 1;
                                }
                                if(getpunch[i]['attendance_type_id']==2){
                                    absentCount += 1;
                                }
                            }
                            
                            return res.status(200).json({
                                message: lang.SUCCESS,
                                punchDetail: getpunch,
                                presentCount: presentCount,
                                absentCount: absentCount,
                                workHour: workHour,
                            });
                        }
                        else {
                            res.status(200).json({
                                message: lang.NOT_FOUND,
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
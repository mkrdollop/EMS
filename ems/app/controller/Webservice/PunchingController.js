
const { Op } = require("sequelize");
const express = require('express');
const app = new express();
var md5 = require('md5');
var token_helper = require('../../helper/token_helper.js');
const db = require("../../config/db.js");
const language_helper = require("../../helper/language_helper");
const Common_helper = require("../../helper/Common_helper");
var multer = require('multer');
var multipart = require('connect-multiparty');
var Currnetdate = new Date();
var path = require('path');
var current_date = new Date();
var FormData = require('form-data');
const dateTime = require('date-and-time');
const currentDateTime = dateTime.format(current_date, 'Y/M/D');
var form = new FormData();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = "./uploads/punch_image";
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})


var upload = multer({ storage: storage });
const Sequelizes = require('sequelize');
//const sequelize = db.sequelize;
//const { QueryTypes } = require('sequelize');

/* ============
add punch
============= */
module.exports.add_punch = (req, res) => {
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    var authheader = req.headers.authorization;
    //console.log(req.files);

    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            const cpUpload = upload.fields([{ name: 'punch_in_image', maxCount: 1 }]);
            cpUpload(req, res, function (err) {
                
                var user_id = typeof req.body.user_id != 'undefined' ? req.body.user_id : "";
                var work_time_id = typeof req.body.work_time_id != 'undefined' ? req.body.work_time_id : "";
                var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
                var punch_in_type = typeof req.body.punch_in_type != 'undefined' ? req.body.punch_in_type : "";
                var punch_for = typeof req.body.punch_for != 'undefined' ? req.body.punch_for : "";
                var attendance_type_id = typeof req.body.attendance_type_id != 'undefined' ? req.body.attendance_type_id : "";
                var punch_in_location = typeof req.body.punch_in_location != 'undefined' ? req.body.punch_in_location : "";
                var punch_in_lat = typeof req.body.punch_in_lat != 'undefined' ? req.body.punch_in_lat : "";
                var punch_in_long = typeof req.body.punch_in_long != 'undefined' ? req.body.punch_in_long : "";

                var punch_in_image = typeof req.files.punch_in_image != 'undefined' ? req.files.punch_in_image : "";

                var lang = language_helper.load_language(language);
                var userData = "";

                if (punch_in_image != "") {
                    punch_in_image = req.files.punch_in_image[0].path;
                }
                
                
                if (user_id != "") {
                    user_id = user_id
                }
                else {
                    user_id = data.user_id
                }
                
                var punchData = {
                    role_type: data.role_type,
                    user_id: user_id,
                    work_time_id: work_time_id,
                    punch_in_by: data.role_type,
                    punch_for: punch_for,
                    punch_in_type: punch_in_type,
                    punch_in_location: punch_in_location,
                    punch_in_lat: punch_in_lat,
                    punch_in_long: punch_in_long,
                    punch_in_image: punch_in_image,
                    attendance_type_id: attendance_type_id,
                    punch_in_time: Currnetdate.toISOString(),
                    created_at: Currnetdate.toISOString(),
                    updated_at: Currnetdate.toISOString()
                }
                if (punch_for != "" && punch_in_type != "" && attendance_type_id != "" && punch_in_location != "" && punch_in_long != "" && punch_in_lat != "") {
                    /* let querys;
                    querys = "SELECT * FROM `attendance` WHERE (CONVERT(created_at,date)) = '" + currentDateTime + "' AND user_id = '" + user_id + "'";
                    db.connection.query(querys, { type: Sequelizes.QueryTypes.SELECT })
                        .then(function (attendance) {
                            if (attendance.length == 0) { */
                                if(data.role_type=="Admin_User")
                                {
                                    let userData = function getUser(){
                                        return db.User.findOne({attributes:['work_time_id']},{ where: { user_id: user_id} }).then();
                                    }
                                    userData().then(function (r) {
                                        punchData.work_time_id = r.work_time_id;
                                        db.Attendance.create(punchData).then((result) => {
                                            if (result) {
                                                return res.status(200).json({
                                                    message: lang.SUCCESS,
                                                });

                                            } else {

                                                return res.status(400).json({
                                                    message: lang.FAILED,

                                                });
                                            }
                                        });
                                    });
                                }else{
                                    db.Attendance.create(punchData).then((result) => {
                                        if (result) {
                                            return res.status(200).json({
                                                message: lang.SUCCESS,
                                            });

                                        } else {

                                            return res.status(400).json({
                                                message: lang.FAILED,

                                            });
                                        }
                                    });
                                }
                                
                            /* }
                            else {
                                res.status(400).json({
                                    message: lang.ALREDY_EXIST,

                                });
                            }
                        }); */
                }
                else {
                    res.status(400).json({
                        message: lang.ALL_REQUIRED,
                        punchData: punchData
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
punch out
============= */
module.exports.punch_out = (req, res) => {
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    var authheader = req.headers.authorization;
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            const cpUpload = upload.fields([{ name: 'punch_out_image', maxCount: 1 }]);
            cpUpload(req, res, function (err) {
                
                var user_id = typeof req.body.user_id != 'undefined' ? req.body.user_id : "";
                var punch_id = typeof req.body.punch_id != 'undefined' ? req.body.punch_id : "";
                var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
                var punch_out_type = typeof req.body.punch_out_type != 'undefined' ? req.body.punch_out_type : "";
                var punch_out_location = typeof req.body.punch_out_location != 'undefined' ? req.body.punch_out_location : "";
                var punch_out_lat = typeof req.body.punch_out_lat != 'undefined' ? req.body.punch_out_lat : "";
                var punch_out_long = typeof req.body.punch_out_long != 'undefined' ? req.body.punch_out_long : "";
                var over_time = typeof req.body.over_time != 'undefined' ? req.body.over_time : "";

                var punch_out_image = typeof req.files.punch_out_image != 'undefined' ? req.files.punch_out_image : "";


                var lang = language_helper.load_language(language);

                if (punch_out_image != "") {
                    punch_out_image = req.files.punch_out_image[0].path;
                }
                
                if (user_id != "") {
                    user_id = user_id
                }
                else {
                    user_id = data.user_id
                }
                var punchData = {
                    role_type: data.role_type, 
                    punch_out_by: data.role_type,
                    punch_out_type: punch_out_type,
                    punch_out_location: punch_out_location,
                    punch_out_lat: punch_out_lat,
                    punch_out_long: punch_out_long,
                    over_time: over_time,
                    punch_out_image: punch_out_image,
                    punch_out_time: Currnetdate.toISOString(),
                    created_at: Currnetdate.toISOString(),
                    updated_at: Currnetdate.toISOString()
                }
                if (punch_id != "" && punch_out_type != "" && punch_out_location != "" && punch_out_long != "" && punch_out_lat != "") {
                    
                    let querys;
                    querys = "SELECT * FROM `attendance` WHERE attendance_id = '" + punch_id + "' AND punch_out_time IS NOT NULL  AND punch_out_time!= ''";
                    
                    db.connection.query(querys, { type: Sequelizes.QueryTypes.SELECT })
                        .then(function (attendance) {
                        if (attendance.length == 0) {
                            
                            if(data.role_type=="Admin_User"){
                            
                                
                                db.Attendance.update(punchData,
                                {
                                    where:
                                    {
                                        attendance_id: punch_id,

                                    }
                                }).then((result) => {
                                    return res.status(200).json({
                                        message: lang.SUCCESS,
                                    });

                                });
                                
                            }else{
                                db.Attendance.create(punchData).then((result) => {
                                    if (result) {
                                        return res.status(200).json({
                                            message: lang.SUCCESS,
                                        });

                                    } else {

                                        return res.status(400).json({
                                            message: lang.FAILED,

                                        });
                                    }
                                });
                            }
                        }
                    
                        else {
                            
                            res.status(400).json({
                                message: lang.ALREDY_EXIST,

                            });
                            }
                    });
                }
                else {
                    res.status(400).json({
                        message: lang.ALL_REQUIRED,
                        punchData: punchData
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
change punch status
============= */
module.exports.change_punch_status = (req,res)=>{
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    var authheader = req.headers.authorization;
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            var punch_id = typeof req.body.punch_id != 'undefined' ? req.body.punch_id : "";
            var attendance_type_id = typeof req.body.attendance_type_id != 'undefined' ? req.body.attendance_type_id : "";
            if(punch_id !="" && attendance_type_id !="")
            {
                updateValues ={
                    attendance_type_id:attendance_type_id,
                    updated_at: Currnetdate.toISOString()
                };
                db.Attendance.update(updateValues,
                    {
                        where:
                        {
                            attendance_id: punch_id,

                        }
                    }).then((result) => {
                        return res.status(200).json({
                            message: lang.SUCCESS,
                        });

                    });
            }
            else
            {
                res.status(400).json({
                    message: lang.ALL_REQUIRED,
                    // punchData: result
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
get punch status
============= */
module.exports.get_punch = (req, res) => {
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
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

/* ============
add overtime
============= */
module.exports.add_overtime = (req, res) => {
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    var authheader = req.headers.authorization;
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        
        if (data) {
           
            var punch_id = typeof req.body.punch_id != 'undefined' ? req.body.punch_id : "";
            var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
            var over_time_rate = typeof req.body.over_time_rate != 'undefined' ? req.body.over_time_rate : "";
            var over_time_remark = typeof req.body.over_time_remark != 'undefined' ? req.body.over_time_remark : "";
            var over_time = typeof req.body.over_time != 'undefined' ? req.body.over_time : "";
            var type = typeof req.body.type != 'undefined' ? req.body.type : "";
            var lang = language_helper.load_language(language);

            
            var punchData = {
                over_time_rate: over_time_rate,
                over_time_remark: over_time_remark,
                over_time: over_time,
                updated_at: Currnetdate.toISOString()
            }
                
            if (punch_id != "" ) {
                console.log(lang);
                if(type=="delete"){
                    var punchData = {
                        over_time_rate: "",
                        over_time_remark: "",
                        over_time: "",
                        updated_at: Currnetdate.toISOString()
                    
                    }  

                    db.Attendance.update(punchData,
                    {
                        where:
                        {
                           attendance_id: punch_id,
                        }
                        
                    }).then((result) => {
                        return res.status(200).json({
                            message: lang.SUCCESS,
                            punchData:punchData
                        });

                    });
                }else if(over_time_rate != "" && over_time_remark != "" && over_time != ""){
                    db.Attendance.update(punchData,
                    {
                        where:
                        {
                           attendance_id: punch_id,

                        }
                        
                    }).then((result) => {
                        return res.status(200).json({
                            message: lang.SUCCESS,
                            punchData:punchData
                        });

                    });
                } else {
                    
                    res.status(400).json({
                        message: lang.ALL_REQUIRED,
                        punchData: punchData
                    });
                }
           
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




var token_helper = require('../../helper/token_helper.js');
const db = require("../../config/db.js");
const language_helper = require("../../helper/language_helper");
const Common_helper = require("../../helper/Common_helper");
const { Op } = require("sequelize");
var current_date = new Date();
current_date = current_date.toISOString();


/* ============
get department branch 
============= */
module.exports.get_holiday = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var year = typeof req.query.year != 'undefined' ? req.query.year : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        console.log(year);
        if (data) {           
            if(year !="")
            {
               
                query = `SELECT * FROM holidays WHERE user_id=` + data.user_id + ` AND DATE_FORMAT(date,"%Y") ="` + year + `" ORDER BY date ASC`;

                db.connection.query(query, { type: db.Sequelize.QueryTypes.SELECT }).then((holiday) => {
                    if (!holiday) {
                        res.status(200).json({
                            message: lang.NOT_FOUND
                        });
                    }
                    if (holiday) {
                        res.status(200).json({ holiday: holiday });
                    }
                })
                
            }
            else
            {
                db.Holiday.findAll({ 
                    where:
                     { 
                         user_id: data.user_id
                     } ,
                    order: [
                        [date, 'order', 'ASC'],                        
                    ]
                    
                }).then(holiday => {
                    if (!holiday) {
                        res.status(200).json({
                            message: lang.NOT_FOUND
                        });
                    }
                    if (holiday) {
                        res.status(200).json({ holiday: holiday });
                    }
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
delete department branch 
============= */
module.exports.delete_holiday = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var holiday_id = typeof req.body.holiday_id != 'undefined' ? req.body.holiday_id : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);

        if (data) {
            if (holiday_id != "") {
                db.User.findOne({ where: { user_id: data.user_id } }).then(user => {
                    if (user.holiday_id != holiday_id) {
                        db.Holiday.destroy({ where: { id: holiday_id } }).then(result => {

                            if (result == 0) {
                                res.status(400).json({
                                    message: lang.FAILED
                                });
                            }
                            else {
                                res.status(200).json({
                                    message: lang.SUCCESS
                                });
                            }
                        });
                    }
                    else {
                        res.status(400).json({
                            message: lang.DEFUALT_DATA
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
add work timing
============= */
module.exports.add_holiday = (req, res) => {

    var authheader = req.headers.authorization;
    var holiday_name = typeof req.body.holiday_name != 'undefined' ? req.body.holiday_name : "";
    var date = typeof req.body.date != 'undefined' ? req.body.date : "";
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var holiday_id = typeof req.body.holiday_id != 'undefined' ? req.body.holiday_id : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            
            var departmentData = {
                user_type: "user",
                user_id: data.user_id,
                date: date,
                holiday_name: holiday_name,
                created_at: current_date,
                updated_at: current_date
            }
            if (holiday_name != "" && date != "") {
                if (holiday_id != "") {
                    updateValues = {
                        date: date,
                        holiday_name: holiday_name,
                        updated_at: date.toString()

                    }
                    db.Holiday.update(updateValues,
                        {
                            where:
                            {
                                id: holiday_id,

                            }
                        }).then((result) => {
                            return res.status(200).json({
                                message: lang.SUCCESS,
                            });

                        });
                }
                else {
                    db.Holiday.create(departmentData).then((result) => {
                        if (result) {
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
            }
            else {
                res.status(400).json({
                    message: lang.ALL_REQUIRED,
                    userData: departmentData
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
add holiday year
============= */
module.exports.add_holiday_year = (req, res) => {

    var authheader = req.headers.authorization;
    var holiday_name = typeof req.body.holiday_name != 'undefined' ? req.body.holiday_name : "";
    var year = typeof req.body.year != 'undefined' ? req.body.year : "";
    
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);

        if (data) {

            var holidayYear = {
                user_type: data.role_type,
                user_id: data.user_id,
                year: year,
                created_at: current_date,
                updated_at: current_date
            }
            if (year != "") {
                db.HolidayYear.findOne({ where: { user_id: data.user_id, year: year } }).then(holiday => {
                    
                    if (!holiday && holiday==null) {
                        
                        db.HolidayYear.create(holidayYear).then((result) => {
                            if (result) {
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
                        res.status(400).json({
                            message: lang.ALREDY_EXIST,

                        });
                    }

                });
            }
            else {
                res.status(400).json({
                    message: lang.ALL_REQUIRED,
                    userData: holidayYear
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
get holiday year
============= */
module.exports.get_holiday_year = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);

        if (data) {
            db.HolidayYear.findAll({ where: { user_id: data.user_id } }).then(holiday => {
                if (!holiday) {
                    res.status(200).json({
                        message: lang.NOT_FOUND
                    });
                }
                if (holiday) {
                    res.status(200).json({ holiday_year: holiday });
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
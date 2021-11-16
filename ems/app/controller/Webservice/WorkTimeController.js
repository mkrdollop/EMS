const express = require('express');
const app = new express();
var token_helper = require('../../helper/token_helper.js');
var timezones = require('timezones.json');

const db = require("../../config/db.js");
const language_helper = require("../../helper/language_helper");
var current_date = new Date();
current_date = current_date.toISOString();



/* ============
get work timing
============= */
module.exports.get_all_work_timing = (req, res) => {

    var header = req.headers.authorization;
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var lang = language_helper.load_language(language);
    if (header) {
        var data = token_helper.verifyJwtToken(header);
        
        if (data) {
            db.WorkTiming.findAll({
                where: {
                    user_type: "default", $or: [
                        {
                            user_id:
                            {
                                $eq: data.user_id
                            }
                        },

                    ]
                }
            }).then(timing => {
                //console.log(timing);
                if (!timing) {
                    res.status(200).json({
                        message: lang.NOT_FOUND
                    });
                }
                if (timing) {
                    res.status(200).json({ 
                        message: lang.SUCCESS,
                        work_time: timing 
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
get work timing
============= */
module.exports.get_time_zone = (req, res) => {

    var header = req.headers.authorization;
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var lang = language_helper.load_language(language);
    if (header) {
        var data = token_helper.verifyJwtToken(header);

        if (data) {
            // console.log(timezones);
            /*  db.WorkTiming.findAll({user_type:"default"}).then(timing => {
                 if (!timing) {                   
                     res.status(200).json({
                         success: false,
                         message: lang.NOT_FOUND
                     });
                 }*/
            if (timezones) {
                res.status(200).json({ 
                    message: lang.SUCCESS,
                    time_zone: timezones });

            }
            else {

                res.status(200).json({
                    message: lang.NOT_FOUND
                });
            }
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

/* ============
get work timing
============= */
module.exports.get_work_time_type = (req, res) => {

    var header = req.headers.authorization;
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var lang = language_helper.load_language(language);
    if (header) {
        var data = token_helper.verifyJwtToken(header);
        

        if (data) {
            db.WorkTimingType.findAll().then(work_time_type => {
                
                if (!work_time_type) {
                    res.status(200).json({
                        message: lang.NOT_FOUND
                    });
                }
                if (work_time_type) {
                    res.status(200).json({ 
                        message: lang.SUCCESS ,
                        work_time_type: work_time_type 
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
add work timing
============= */
module.exports.add_user_work_time = (req, res) => {

    var authheader = req.headers.authorization;
    var work_time_id = typeof req.body.work_time_id != 'undefined' ? req.body.work_time_id : "";
    var user_type = typeof req.body.user_type != 'undefined' ? req.body.user_type : "";
    //var user_id = typeof req.body.user_id != 'undefined' ? req.body.user_id : "";
    var work_time_type_id = typeof req.body.work_time_type_id != 'undefined' ? req.body.work_time_type_id : "";
    var work_timing_name = typeof req.body.work_timing_name != 'undefined' ? req.body.work_timing_name : "";
    var in_time = typeof req.body.in_time != 'undefined' ? req.body.in_time : "";
    var out_time = typeof req.body.out_time != 'undefined' ? req.body.out_time : "";
    var full_day_working_hour = typeof req.body.full_day_working_hour != 'undefined' ? req.body.full_day_working_hour : "";
    var half_day_working_hour = typeof req.body.half_day_working_hour != 'undefined' ? req.body.half_day_working_hour : "";
    var punch_in_notify_time = typeof req.body.punch_in_notify_time != 'undefined' ? req.body.punch_in_notify_time : "";
    var punch_out_notify_time = typeof req.body.punch_out_notify_time != 'undefined' ? req.body.punch_out_notify_time : "";
    var over_time_before_in = typeof req.body.over_time_before_in != 'undefined' ? req.body.over_time_before_in : "";
    var over_time_after_out = typeof req.body.over_time_after_out != 'undefined' ? req.body.over_time_after_out : "";
    var time_zone = typeof req.body.time_zone != 'undefined' ? req.body.time_zone : "";
    var is_default = typeof req.body.is_default != 'undefined' ? req.body.is_default : "";
    //var auto_clock_out = typeof req.body.auto_clock_out != 'undefined' ? req.body.auto_clock_out : "";
    //var email_selfie_punch = typeof req.body.email_selfie_punch != 'undefined' ? req.body.email_selfie_punch : "";
    var work_time_content = typeof req.body.work_time_content != 'undefined' ? req.body.work_time_content : "";
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);

        if (data) {
            var workData = {
                user_id: data.user_id,
                work_time_type_id: work_time_type_id,
                work_timing_name: work_timing_name,
                in_time: in_time,
                out_time: out_time,
                full_day_working_hour: full_day_working_hour,
                half_day_working_hour: half_day_working_hour,
                punch_in_notify_time: punch_in_notify_time,
                punch_out_notify_time: punch_out_notify_time,
                over_time_before_in: over_time_before_in,
                over_time_after_out: over_time_after_out,
                time_zone: time_zone,
                work_time_content: work_time_content,
                created_at: current_date.toString(),
                updated_at: current_date.toString(),
            }
            if (work_time_id != "") {
                var updateData = {
                    updated_at: current_date.toString(),
                };
                if (work_time_type_id != "") {
                    updateData['work_time_type_id'] = work_time_type_id;
                }
                if (in_time != "") {
                    updateData['in_time'] = in_time;
                }
                if (work_timing_name != "") {
                    updateData['work_timing_name'] = work_timing_name;
                }
                if (out_time != "") {
                    updateData['out_time'] = out_time;
                }
                if (full_day_working_hour != "") {
                    updateData['full_day_working_hour'] = full_day_working_hour;
                }
                if (half_day_working_hour != "") {
                    updateData['half_day_working_hour'] = half_day_working_hour;
                }
                if (punch_in_notify_time != "") {
                    updateData['punch_in_notify_time'] = punch_in_notify_time;
                }
                if (punch_out_notify_time != "") {
                    updateData['punch_out_notify_time'] = punch_out_notify_time;
                }
                if (over_time_before_in != "") {
                    updateData['over_time_before_in'] = over_time_before_in;
                }
                if (over_time_after_out != "") {
                    updateData['over_time_after_out'] = over_time_after_out;
                }
                if (time_zone != "") {
                    updateData['time_zone'] = time_zone;
                }
                if (work_time_content != "") {
                    updateData['work_time_content'] = work_time_content;
                }
                if (is_default != "") {
                    updateData['is_default'] = is_default;
                    if(is_default==1)
                    {
                        db.WorkTiming.update({is_default:0},
                        {
                            where:
                            {
                                user_id: data.user_id
                            }
                        });
                    }

                }

                if (work_time_content.includes(1)) {

                    db.WorkTiming.update({ is_default: 0 },
                        {
                            where:
                            {
                                user_id: user_id,

                            }
                        }).then((result) => {
                            workData['is_default'] = 1;

                        });
                }

                db.WorkTiming.update(updateData,
                    {
                        where:
                        {
                            work_time_id: work_time_id,

                        }
                    }).then((result) => {
                        if (result) {
                            //sendMessage();
                            return res.json({
                                status: 200,
                                message: lang.SUCCESS,
                                // otp: otp
                            });

                        } else {

                            return res.json({
                                status: 400,
                                message: lang.FAILED,

                            });
                        }
                    });
            }
            else {
                if (time_zone != "" && over_time_before_in != "" && over_time_after_out != "" && punch_out_notify_time != "" && punch_in_notify_time != "" && work_time_type_id != "" && work_timing_name != "" && in_time != "" && out_time != "" && full_day_working_hour != "" && half_day_working_hour != "" && work_time_content != "") {

                    if (work_time_content.includes(1)) {

                        db.WorkTiming.update({ is_default: 0 },
                            {
                                where:
                                {
                                    user_id: data.user_id,

                                }
                            }).then((result) => {
                                workData['is_default'] = 1;

                            });
                    }
                    db.WorkTiming.create(workData).then((result) => {
                        if (result) {
                            //sendMessage();
                            return res.json({
                                status: 200,
                                message: lang.SUCCESS,
                                // otp: otp
                            });

                        } else {

                            return res.json({
                                status: 400,
                                message: lang.FAILED,

                            });
                        }
                    });

                }
                else {
                    res.status(400).json({
                        message: lang.ALL_REQUIRED,
                        userData: workData
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




/* ============
get work timing
============= */
module.exports.get_all_work_timing = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        //console.log(data);

        if (data) {
            db.WorkTiming.findAll({ where: { user_id: data.user_id } }).then(timing => {

                if (!timing) {
                    res.status(200).json({
                        message: lang.NOT_FOUND
                    });
                }
                if (timing) {
                    res.status(200).json({ 
                        message: lang.SUCCESS,
                        work_time: timing 
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
get work timing
============= */
module.exports.get_work_timing_content = (req, res) => {

    var header = req.headers.authorization;
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var lang = language_helper.load_language(language);
    if (header) {
        var data = token_helper.verifyJwtToken(header);

        if (data) {
            db.WorkTimeContent.findAll().then(timing => {
                //console.log(timing);
                if (!timing) {
                    res.status(200).json({
                        message: lang.NOT_FOUND
                    });
                }
                if (timing) {
                    res.status(200).json({
                        message: lang.SUCCESS,
                        work_time_content: timing
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
delete Worktime 
============= */
module.exports.delete_worktime = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var work_time_id = typeof req.body.work_time_id != 'undefined' ? req.body.work_time_id : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);

        if (data) {
            if (work_time_id != "") {
                
                db.WorkTiming.destroy({ where: { work_time_id: work_time_id } }).then(result => {

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
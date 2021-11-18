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
add calander
============= */
module.exports.admin_add_plan = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var plan_name = typeof req.body.plan_name != 'undefined' ? req.body.plan_name : "";
    var plan_amount = typeof req.body.plan_amount != 'undefined' ? req.body.plan_amount : "";
    var plan_type = typeof req.body.plan_type != 'undefined' ? req.body.plan_type : "";
    var plan_feature = typeof req.body.plan_feature != 'undefined' ? req.body.plan_feature : "";
    var plan_description = typeof req.body.plan_description != 'undefined' ? req.body.plan_description : "";
    var plan_id = typeof req.body.plan_id != 'undefined' ? req.body.plan_id : "";
    var is_active = typeof req.body.is_active != 'undefined' ? req.body.is_active : "";
    var is_deleted = typeof req.body.is_deleted != 'undefined' ? req.body.is_deleted : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        console.log(data);
        if (data) {
            if (plan_id != "") {
                updateValues = {
                    updated_at: current_date
                }
                if (plan_name != "") {
                    updateValues.plan_name = plan_name;
                }
                if (plan_amount != "") {
                    updateValues.plan_amount = plan_amount;
                }
                if (plan_feature != "") {
                    updateValues.plan_feature = plan_feature;
                }
                if (plan_description != "") {
                    updateValues.plan_description = plan_description;
                }
                if (is_active != "") {
                    updateValues.is_active = is_active;
                }
                if (is_deleted != "") {
                    updateValues.is_deleted = is_deleted;
                }
                if (plan_type != "") {
                    updateValues.plan_type = plan_type;
                }
                db.Plan.update(updateValues,
                    {
                        where:
                        {
                            plan_id: plan_id,

                        }
                    }).then((result) => {
                        return res.status(200).json({
                            message: lang.SUCCESS,
                        });

                    });
            }
            else {
                planData = {
                 
                    plan_name: plan_name,
                    plan_amount: plan_amount,
                    plan_type: plan_type,
                    plan_feature: plan_feature,
                    plan_description: plan_description,
                    created_at: current_date,
                    updated_at: current_date
                }
                db.Plan.create(planData)
                    .then(function (result) {
                        if (result) {
                            return res.status(200).json({
                                message: lang.SUCCESS,
                            });
                        }
                        else {
                            res.status(400).json({
                                message: lang.FAILED,
                            });

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


module.exports.admin_get_all_plan = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var plan_id = typeof req.body.plan_id != 'undefined' ? req.body.plan_id : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            if (plan_id != "") {
                // console.log("hello plan");

                db.Plan.findOne({ where: { plan_id: plan_id } }).then(plan => {

                    if (plan) {
                        res.status(400).json({
                            message: lang.SUCCESS,
                            plan: plan
                        });
                    }
                    else {
                        res.status(200).json({
                            message: lang.FAILED,
                            plan: {}
                        });
                    }

                });
            }
            else {
                db.Plan.findAll({ where: { is_deleted: 1,is_active: 1 } }).then(plan => {
                    if (plan) {
                        res.status(400).json({
                            message: lang.SUCCESS,
                            plan: plan
                        });
                    }
                    else {
                        res.status(200).json({
                            message: lang.FAILED,
                            plan: {}
                        });
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


module.exports.get_admin_plan_by_user=(req,res)=>
{
    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var plan_id = typeof req.body.plan_id != 'undefined' ? req.body.plan_id : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            if (plan_id != "") {
                db.Plan.findOne({ where: { plan_id: plan_id } }).then(plan => {

                    if (plan) {
                        res.status(400).json({
                            message: lang.SUCCESS,
                            plan: plan
                        });
                    }
                    else {
                        res.status(200).json({
                            message: lang.FAILED,
                            plan: {}
                        });
                    }

                });
            }
            else {
                db.Plan.findAll({ where: { is_deleted:1,is_active:1 } }).then(plan => {
                    if (plan) {
                        res.status(400).json({
                            message: lang.SUCCESS,
                            plan: plan
                        });
                    }
                    else {
                        res.status(200).json({
                            message: lang.FAILED,
                            plan: {}
                        });
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

module.exports.delete_plan = (req, res) => {
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    var authheader = req.headers.authorization;

    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            var plan_id = typeof req.body.plan_id != 'undefined' ? req.body.plan_id : "";
                if (plan_id != "") {

                    var updateValues = {is_deleted:0 ,updated_at: current_date};
                    db.Plan.update(updateValues,
                        {
                            where:
                            {
                                plan_id: plan_id,
                                
                            }
                            
                        }).then((result) => {
                            return res.status(200).json({
                                message: lang.SUCCESS,
                            });

                        });
                }
                else {
                    res.status(400).json({
                        message: lang.ALL_REQUIRED,
                        planData: planData
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


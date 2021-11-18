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
const { lastIndexOf } = require("currency-codes/data");
const currentDateTime = dateTime.format(Currnetdate, 'Y/M/D');

/* ============
get Employee
============= */
module.exports.get_privcy_policy = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var _id = typeof req.body._id != 'undefined' ? req.body._id : "";
    var lang = language_helper.load_language(language);
    if (authheader){
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            if (_id != "") {
                db.PrivacyAndPolicy.findOne({ where: { id: _id } }).then(policy => {

                    if (policy) {
                        res.status(400).json({
                            message: lang.SUCCESS,
                            policy:policy
                        });
                    }
                    else {
                        res.status(200).json({
                            message: lang.FAILED,
                            policy: {}
                        });
                    }

                });
            }
            else{
            db.PrivacyAndPolicy.findAll()
                .then(function (PrivacyAndPolicy) {
                    if (PrivacyAndPolicy.length != 0) {
                        return res.status(200).json({
                            message: lang.SUCCESS,
                            privacypolicy: PrivacyAndPolicy
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

module.exports.add_privcy_policy = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var policy = typeof req.body.policy != 'undefined' ? req.body.policy : "";
    var _id = typeof req.body._id != 'undefined' ? req.body._id : "";

    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            if (_id != "") {
                updateValues = {
                    updated_at: current_date
                }
                if (policy != "") {
                    updateValues.policy = policy;
                }
                db.PrivacyAndPolicy.update(updateValues,
                    {
                        where:
                        {
                            id: _id,
                        }
                    }).then((result) => {
                        return res.status(200).json({
                            message: lang.SUCCESS,
                            result:result
                        });

                    });
                    
            }
                
            else {
                var faqPolicy={
                    policy: policy,
                }
                console.log(faqPolicy);
                db.PrivacyAndPolicy.create(faqPolicy).then((result01) => {
                    if (result01) {
                console.log(result01);
                        
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

module.exports.delete_privcy_policy = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var _id = typeof req.body._id != 'undefined' ? req.body._id : "";
    var is_deleted = typeof req.body.is_deleted != 'undefined' ? req.body.is_deleted : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            // DELETE FROM table_name WHERE condition;
            if (is_deleted == "delete") {
                var querys = `Delete from privcy_policy where id = '`+ _id + `'`;
                
                db.connection.query(querys, { type: Sequelizes.QueryTypes.SELECT })
                .then(function (attendance) {
                    console.log(attendance);
                }
                );
            }
            var updateValues = { is_deleted: is_deleted};
            db.PrivacyAndPolicy.update(updateValues,
                {
                    where:
                    {
                       id: _id
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
}
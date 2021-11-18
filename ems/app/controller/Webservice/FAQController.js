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
module.exports.get_faq = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var faq_id = typeof req.body.faq_id != 'undefined' ? req.body.faq_id : "";
    var lang = language_helper.load_language(language);
    if (authheader){
        var data = token_helper.verifyJwtToken(authheader);
        
        if (data) {
            if (faq_id != "") {
                db.FAQ.findOne({ where: { id: faq_id } }).then(content => {

                    if (content) {
                        res.status(400).json({
                            message: lang.SUCCESS,
                            content: content
                        });
                    }
                    else {
                        res.status(200).json({
                            message: lang.FAILED,
                            content: {}
                        });
                    }

                });
            }

            else{ 
            db.FAQ.findAll()
                .then(function (FAQ) {
                    if (FAQ.length != 0) {
                        return res.status(200).json({
                            message: lang.SUCCESS,
                            FAQ: FAQ
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

module.exports.add_faq = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var content = typeof req.body.content != 'undefined' ? req.body.content : "";
    var faq_id = typeof req.body.faq_id != 'undefined' ? req.body.faq_id : "";

    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
           
            if (faq_id != "") {
                updateValues = {
                    updated_at: current_date
                }
                if (content != "") {
                    updateValues.content = content;
                }
                db.FAQ.update(updateValues,
                    {
                        where:
                        {
                            id: faq_id,
                        }
                    }).then((result) => {
                        return res.status(200).json({
                            message: lang.SUCCESS,
                            result:result
                        });

                    });
            }
                
            else {
                var faqContent={
                    content: content,
                }
                db.FAQ.create(faqContent).then((result01) => {
                    if (result01) {
                        
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

module.exports.delete_faq = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var faq_id = typeof req.body.faq_id != 'undefined' ? req.body.faq_id : "";
    var is_deleted = typeof req.body.is_deleted != 'undefined' ? req.body.is_deleted : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            // DELETE FROM table_name WHERE condition;
            if (is_deleted == "delete") {
                var querys = `Delete from faq where id = '`+ faq_id + `'`;
                
                db.connection.query(querys, { type: Sequelizes.QueryTypes.SELECT })
                .then(function (attendance) {
                    console.log(attendance);
                }
                );
            }
            var updateValues = { is_deleted: is_deleted};
            db.FAQ.update(updateValues,
                {
                    where:
                    {
                       id: faq_id
                    }
                }).then((result) => {
                    return res.status(200).json({
                        message: lang.SUCCESS,
                        result:result
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

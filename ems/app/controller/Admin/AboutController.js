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
add/ update about
============= */
module.exports.admin_add_about_us = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var about = typeof req.body.about != 'undefined' ? req.body.about : "";
    var id = typeof req.body.id != 'undefined' ? req.body.id : "";
    var created_at = typeof req.body.created_at != 'undefined' ? req.body.created_at : "";
    var updated_at = typeof req.body.updated_at != 'undefined' ? req.body.updated_at : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        console.log(data);
        if (data) {
            if (id != "") {
                updateValues = {
                    updated_at: current_date
                }
                if (about != "") {
                    updateValues.about = about;
                }
                if (created_at != "") {
                    updateValues.created_at = created_at;
                }
                if (updated_at != "") {
                    updateValues.updated_at = updated_at;
                }
            
                db.AboutUs.update(updateValues,
                    {
                        where:
                        {
                            id: id,

                        }
                    }).then((result) => {
                        return res.status(200).json({
                            message: lang.SUCCESS,
                        });

                    });
            }
            else {
                aboutusData = {
                 
                   about:about,
                   id: id,
                   created_at: current_date,
                   updated_at: current_date
                }
                db.AboutUs.create(aboutusData)
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


/* ============
get about
============= */

module.exports.admin_get_all_about_us = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var id = typeof req.body.id != 'undefined' ? req.body.id : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            if (id != "") {
                // console.log("hello plan");

                db.AboutUs.findOne({ where: { id: id } }).then(about => {

                    if (about) {
                        res.status(400).json({
                            message: lang.SUCCESS,
                            about: about
                        });
                    }
                    else {
                        res.status(200).json({
                            message: lang.FAILED,
                            about: {}
                        });
                    }

                });
            }
            else {
                db.AboutUs.findAll({ where: { } }).then(about => {
                    if (about) {
                        res.status(400).json({
                            message: lang.SUCCESS,
                            about: about
                        });
                    }
                    else {
                        res.status(200).json({
                            message: lang.FAILED,
                            about: {}
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




/* ============
delete About
============= */
module.exports.admin_delete_about_us = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var id = typeof req.body.id != 'undefined' ? req.body.id : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);

        if (data) {
            if (id != "") {
                
                db.AboutUs.destroy({ where: { id: id } }).then(result => {

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
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
const { Module } = require('module');


var current_date = new Date();
current_date = current_date.toISOString();

module.exports.get_terms_and_condition = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
           
                db.Terms_and_policy.findOne().then(terms => {

                    if (terms) {
                        res.status(400).json({
                            message: lang.SUCCESS,
                            terms: terms
                        });
                    }
                    else {
                        res.status(200).json({
                            message: lang.FAILED,
                            terms: {}
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

module.exports.get_about = (req, res) => {
    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
                db.AboutUs.findOne().then(abouts => {

                    if (abouts) {
                        res.status(400).json({
                            message: lang.SUCCESS,
                            abouts: abouts
                        });
                    }
                    else {
                        res.status(200).json({
                            message: lang.FAILED,
                            AboutUs: {}
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

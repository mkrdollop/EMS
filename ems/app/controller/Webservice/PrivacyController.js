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
    var lang = language_helper.load_language(language);
        // console.log(authheader);
    if (authheader)
    {
        var data = token_helper.verifyJwtToken(authheader);
        console.log(data);

        if (data) {
            db.PrivacyAndPolicy.findAll()
                .then(function (PrivacyAndPolicy) {
                    if (PrivacyAndPolicy.length != 0) {
                        return res.status(200).json({
                            message: lang.SUCCESS,
                            employee: PrivacyAndPolicy
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
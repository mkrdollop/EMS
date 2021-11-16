const express = require('express');
const app = new express();
var md5 = require('md5');
var token_helper = require('../../helper/token_helper.js');
const db = require("../../config/db.js");
const language_helper = require("../../helper/language_helper");
const Common_helper = require("../../helper/Common_helper");
//var multipartMiddleware = multipart();
var path = require('path');
var Sequelizes = require('Sequelize');
const { Module } = require('module');


var current_date = new Date();
current_date = current_date.toISOString();

module.exports.add_support_chat = (req, res) => {
    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var message = typeof req.body.message != 'undefined' ? req.body.message : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            var chatData = {
                sender_id: data.user_id,
                reciever_id:0,
                sender_type: data.role_type,
                reciever_type:"Admin",
                message:message,
                created_at: current_date,
                updated_at: current_date
            }
                db.SupportChat.create(chatData)
                    .then(function (result) {
                        if (result) {
                            return res.status(200).json({
                                message: lang.SUCCESS,

                            });
                        }
                        else {
                            return res.status(400).json({
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

module.exports.get_support_chat = (req, res) => {
    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            var user_id = data.user_id;
            var role_type = data.role_type;

                var querys = '';
                querys = "SELECT *  FROM `support_chat` WHERE (sender_id = '" + user_id + "' AND sender_type='"+ role_type +"') OR (reciever_id='" + user_id + "' AND reciever_type='"+ role_type +"')";
                db.connection.query(querys, { type: Sequelizes.QueryTypes.SELECT })
                    .then(function (result) {
                        if (result) {
                            return res.status(200).json({
                                message: lang.SUCCESS,
                                supportChat: result
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


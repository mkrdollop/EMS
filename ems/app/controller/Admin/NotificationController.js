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

module.exports.get_all_notification = (req, res) => {
    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            var user_id = data.user_id;
            var role_type = data.role_type;

                let querys = `SELECT notification.*,user.first_name
                FROM notification
                LEFT JOIN user ON notification.user_id = user.user_id
                WHERE reciever_id = `+ user_id +`  AND reciever_type = '`+ role_type +`'
                ORDER BY notification.created_at DESC`;

                
                // querys = " WHERE reciever_id='" + user_id + "' AND reciever_type='"+ role_type +"'";
                db.connection.query(querys, { type: Sequelizes.QueryTypes.SELECT })
                    .then(function (notification) {
                        if (notification) {
                            return res.status(200).json({
                                message: lang.SUCCESS,
                                notification: notification
                            });
                        }
                        else {
                            res.status(400).json({
                                message: lang.FAILED,
                                notification:{}
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
const express = require('express');
const app = new express();
var otpGenerator = require('otp-generator')
var md5 = require('md5');
var token_helper = require('../../helper/token_helper.js');
const db = require("../../config/db.js");
const language_helper = require("../../helper/language_helper");
const Common_helper = require("../../helper/Common_helper");
var md5 = require('md5');
const { Op } = require("sequelize");

var multer = require('multer');
var multipart = require('connect-multiparty');
//var multipartMiddleware = multipart();
var path = require('path');

var current_date = new Date();
current_date = current_date.toISOString();

var FormData = require('form-data');

var form = new FormData();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = "./uploads/" + file.fieldname;
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage });

module.exports.get_admin_profile = (req, res) => {

    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var lang = language_helper.load_language(language);
    
    var header = req.headers.authorization;
    if (header) {
        var data = token_helper.verifyJwtToken(header);
        if (data) {
            var admin_id = data.user_id ;
                
            db.Admin.findOne({where:{ admin_id: admin_id }}).then(user =>  {
                if (user) {

                    return res.status(200).json({
                        message: lang.SUCCESS,
                        userData: user
                    });

                } else {
                    res.status(400).json({
                        message: lang.NOT_FOUND,
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

module.exports.update_admin_profile = (req, res) => {
    var header = req.headers.authorization;
    var lang = language_helper.load_language("English");
    if (header) {    
        var data = token_helper.verifyJwtToken(header);
        if (data) {
            const cpUpload = upload.fields([{ name: 'profile_pic', maxCount: 1 }]);
            cpUpload(req, res, function (err) {
                
                var admin_id = typeof req.body.admin_id != 'undefined' ? req.body.admin_id : "English";
                var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
                var name = typeof req.body.name != 'undefined' ? req.body.name : "";
                var email = typeof req.body.email != 'undefined' ? req.body.email : "";
                var profile_pic = typeof req.files.profile_pic != 'undefined' ? req.files.profile_pic : "";
                var lang = language_helper.load_language(language);
               
                var admin_id = data.user_id ;
            
                var updateValues = [];
                if (name != "") {
                    updateValues['name'] = name;
                }
                if (email != "") {
                    updateValues['email'] = email;
                }
                if (language != "") {
                    updateValues['language'] = language;
                }
                if (profile_pic != "") {
                    updateValues['profile_pic'] = req.files.profile_pic[0].path;
                }
                
                if (language != "" || name != "" || email != "" || profile_pic != ""){
                
                    db.Admin.update(updateValues,
                    {
                        where:
                        {
                            admin_id: admin_id
                        }
                    }).then((result) => {
                        return res.status(200).json({
                            message: lang.SUCCESS,
                        });

                    });
                }else{
                    res.status(400).json({
                        message: lang.INVALID_TOKEN
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
            message: lang.TOKEN_REQUIRED
        });
    }
}
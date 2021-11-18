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
add terms
============= */
module.exports. admin_add_terms_condition = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var terms = typeof req.body.terms != 'undefined' ? req.body.terms : "";
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
                if (terms != "") {
                    updateValues.terms = terms;
                }
                if (created_at != "") {
                    updateValues.created_at = created_at;
                }
                if (updated_at != "") {
                    updateValues.updated_at = updated_at;
                }
                db.Terms_and_policy.update(updateValues,
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
                terms_and_policyData = {   
                    terms: terms,
                    id: id,
                    created_at: current_date,
                    updated_at: current_date
                }
                db.Terms_and_policy.create(terms_and_policyData)
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


module.exports.admin_get_all_terms_condition = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var id = typeof req.body.id != 'undefined' ? req.body.id : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        if (data) {
            if (id != "") {
                // console.log("hello plan");

                db.Terms_and_policy.findOne({ where: { id: id } }).then(terms => {

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
                db.Terms_and_policy.findAll({ where: {  } }).then(terms => {
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
delete admin all terms and condition
============= */
module.exports.admin_delete_terms_condition = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var id = typeof req.body.id != 'undefined' ? req.body.id : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);

        if (data) {
            if (id != "") {
                
                db.Terms_and_policy.destroy({ where: { id: id } }).then(result => {

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

// module.exports.get_admin_plan_by_user=(req,res)=>
// {
//     var authheader = req.headers.authorization;
//     var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
//     var id = typeof req.body.id != 'undefined' ? req.body.id : "";
//     var lang = language_helper.load_language(language);
//     if (authheader) {
//         var data = token_helper.verifyJwtToken(authheader);

//         if (data) {
//             if (id != "") {
//                 db.Plan.findOne({ where: { id: id } }).then(plan => {

//                     if (plan) {
//                         res.status(400).json({
//                             message: lang.SUCCESS,
//                             plan: plan
//                         });
//                     }
//                     else {
//                         res.status(200).json({
//                             message: lang.FAILED,
//                             plan: {}
//                         });
//                     }

//                 });
//             }
//             else {
//                 db.Plan.findAll({ where: { updated_at:1,created_at:1 } }).then(plan => {
//                     if (plan) {
//                         res.status(400).json({
//                             message: lang.SUCCESS,
//                             plan: plan
//                         });
//                     }
//                     else {
//                         res.status(200).json({
//                             message: lang.FAILED,
//                             plan: {}
//                         });
//                     }

//                 });
//             }

//         }
//         else {
//             res.status(400).json({
//                 message: lang.INVALID_TOKEN
//             });
//         }
//     }
//     else {
//         res.status(400).json({
//             message: lang.TOKEN_REQUIRED
//         });
//     } 
// }



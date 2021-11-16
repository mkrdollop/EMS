const express = require('express');
const app = new express();
var token_helper = require('../../helper/token_helper.js');
const db = require("../../config/db.js");
const language_helper = require("../../helper/language_helper");
//const { Op } = require("sequelize");



/* ============
get department branch 
============= */
module.exports.get_department_branch = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);
        console.log(data);

        if (data) {
            db.DepartmentBranch.findAll({ where: { user_id: data.user_id } }).then(branch => {

                if (!branch) {
                    res.status(200).json({
                        message: lang.NOT_FOUND
                    });
                }
                if (branch) {
                    res.status(200).json({ branch: branch });

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

/* ============
delete department branch 
============= */
module.exports.delete_department_branch = (req, res) => {

    var authheader = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var branch_id = typeof req.body.branch_id != 'undefined' ? req.body.branch_id : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);

        if (data) {
            if (branch_id != "") {
                db.User.findOne({ where: { user_id: data.user_id } }).then(user => {
                    if (user.dept_branch_id != branch_id) {
                        db.DepartmentBranch.destroy({ where: { id: branch_id } }).then(result => {

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
                            message: lang.DEFUALT_DATA
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

/* ============
add work timing
============= */
module.exports.add_department_branch = (req, res) => {

    var authheader = req.headers.authorization;
    var department = typeof req.body.department != 'undefined' ? req.body.department : "";
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var branch_id = typeof req.body.branch_id != 'undefined' ? req.body.branch_id : "";
    var lang = language_helper.load_language(language);
    if (authheader) {
        var data = token_helper.verifyJwtToken(authheader);

        if (data) {
            var date = new Date();
            var departmentData = {
                user_type: data.role_type,
                user_id: data.user_id,
                department: department,
                created_at: date.toString()
            }
            if (department != "") {
                if (branch_id == "") {
                    db.DepartmentBranch.findOne({ where: { user_id: data.user_id, department: department } }).then(departments => {

                        if (!departments) {

                            db.DepartmentBranch.create(departmentData).then((result) => {
                                if (result) {
                                    //sendMessage();
                                    return res.status(200).json({
                                        message: lang.SUCCESS,
                                        // otp: otp
                                    });

                                } else {

                                    return res.status(400).json({
                                        message: lang.FAILED,

                                    });
                                }
                            });


                        }
                        else {
                            res.status(400).json({
                                message: lang.ALREDY_EXIST,

                            });
                        }

                    });

                }
                else {
                    updateValues = {
                        department: department,
                        updated_at: date.toString()

                    }
                    db.DepartmentBranch.update(updateValues,
                        {
                            where:
                            {
                                id: branch_id,

                            }
                        }).then((result) => {
                            return res.status(200).json({
                                message: lang.SUCCESS,
                            });

                        });
                }
            }
            else {
                res.status(400).json({
                    message: lang.ALL_REQUIRED,
                    userData: departmentData
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
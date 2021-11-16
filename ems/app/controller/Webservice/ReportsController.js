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

const PDFDocument = require('pdfkit');
const fs = require('fs');
const pdfDoc = new PDFDocument();

 
var current_date = new Date();
current_date = current_date.toISOString();

module.exports.get_reports_type = (req, res) => {

    var header = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    if (header) {
        var data = token_helper.verifyJwtToken(header);

        if (data) {
            db.ReportsType.findAll().then(report => {
                //console.log(timing);
                if (!report) {
                    res.status(200).json({
                        message: lang.NOT_FOUND
                    });
                }
                if (report) {
                    res.status(200).json({
                        message: lang.SUCCESS,
                        report_type: report
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

// module.exports.get_generat_reports = (req, res) => {
//     var header = req.headers.authorization;
//     var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
//     pdfDoc.pipe(fs.createWriteStream('output.pdf'));
//     pdfDoc.pipe(fs.createWriteStream('SampleDocument.pdf'));
//     pdfDoc.text("My Sample PDF Document");

//     pdfDoc.moveDown(0.5)
//     pdfDoc.text('Scaled to fit width')
//     pdfDoc.image('', {width: 150});
//     pdfDoc.end();
//     var lang = language_helper.load_language(language);
    
//     if (header) {
//         var data = token_helper.verifyJwtToken(header);
//         // console.log(data);
//         if (data) {
//             db.ReportsType.findAll().then(report => {
//                 if (!report) {
//                     res.status(200).json({
//                         message: lang.NOT_FOUND
//                     });
//                 }
//                 else (report) 
//                     res.status(200).json({
//                         message: lang.SUCCESS,
//                         report_type: report
                      
//                     });
//             });
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
//             // pdfDoc.pipe(fs.createWriteStream('output.pdf'));
//             // pdfDoc.pipe(fs.createWriteStream('SampleDocument.pdf'));
//             // pdfDoc.text("My Sample PDF Document");
//             // pdfDoc.end();
//             // console.log("data call API ");    
// }



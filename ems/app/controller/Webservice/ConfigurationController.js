var token_helper = require('../../helper/token_helper.js');
const db = require("../../config/db.js");
const language_helper = require("../../helper/language_helper");
var current_date = new Date();
current_date = current_date.toISOString();
var currencyData = require('currency-codes/data');




module.exports.get_configuration = (req, res) => {

    var language = typeof req.query.language != 'undefined' ? req.query.language : "English";
    var lang = language_helper.load_language(language);
    var header = req.headers.authorization;
    if (header) {
        var data = token_helper.verifyJwtToken(header);
        if (data) {
            var user_id = data.user_id;
            let query;

            query = `SELECT user_configuration.*,country.currency_symbol AS currency,country.sortname,country.name AS country_name
                    FROM user_configuration
                    LEFT JOIN country ON (country.id = user_configuration.currency_country_id)
                    WHERE user_configuration.user_id='`+ user_id + `'`;

            db.connection.query(query, { type: db.Sequelize.QueryTypes.SELECT, plain: true }).then((configuration) => {

            
            //db.Configuration.findOne({ where: { user_id: data.user_id, } }).then(configuration => {
                if (configuration) {

                    return res.status(200).json({
                        message: lang.SUCCESS,
                        configuration: configuration
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

/*******
 * @use:update user 
 * @param:token
 * @method:get
 * @response:OK 
  ********** */

module.exports.update_configuration = (req, res) => {
    //var form = new FormData();

    var header = req.headers.authorization;
    var language = typeof req.body.language != 'undefined' ? req.body.language : "English";
    var lang = language_helper.load_language(language);
    if (header) {
        var data = token_helper.verifyJwtToken(header);
        if (data) {
            
                
                var currency = typeof req.body.currency != 'undefined' ? req.body.currency : "";
                var restrict_emp_punch_device = typeof req.body.restrict_emp_punch_device != 'undefined' ? req.body.restrict_emp_punch_device : "";
                var notify_on_emp_punch = typeof req.body.notify_on_emp_punch != 'undefined' ? req.body.notify_on_emp_punch : "";
                var remark_on_punch = typeof req.body.remark_on_punch != 'undefined' ? req.body.remark_on_punch : "";
                var restrict_developer_device = typeof req.body.restrict_developer_device != 'undefined' ? req.body.restrict_developer_device : "";
                var punch_address_required = typeof req.body.punch_address_required != 'undefined' ? req.body.punch_address_required : "";
                var is_selfie_required = typeof req.body.is_selfie_required != 'undefined' ? req.body.is_selfie_required : "";
                var wage_type = typeof req.body.wage_type != 'undefined' ? req.body.wage_type : "";
                var currency_country_id = typeof req.body.currency_country_id != 'undefined' ? req.body.currency_country_id : "";

                

                var updateValues = [];
                if (currency != "") {
                    updateValues['currency'] = currency;
                }
                if (restrict_emp_punch_device != "") {
                    updateValues['restrict_emp_punch_device'] = restrict_emp_punch_device;
                }
                if (notify_on_emp_punch != "") {
                    updateValues['notify_on_emp_punch'] = notify_on_emp_punch;
                }
                if (remark_on_punch != "") {
                    updateValues['remark_on_punch'] = remark_on_punch;
                }
                if (restrict_developer_device != "") {
                    updateValues['restrict_developer_device'] = restrict_developer_device;
                }
                if (is_selfie_required != "") {
                    updateValues['is_selfie_required'] = is_selfie_required;
                }
                if (wage_type != "") {
                    updateValues['wage_type'] = wage_type;
                }
                if (punch_address_required != "") {
                    updateValues['punch_address_required'] = punch_address_required;
                }
                if (currency_country_id != "") {
                    updateValues['currency_country_id'] = currency_country_id;
                }
            if (currency != "" || restrict_emp_punch_device != "" || notify_on_emp_punch != "" || remark_on_punch != "" || restrict_developer_device != "" || is_selfie_required != "" || wage_type != "" || punch_address_required != "" || currency_country_id!="")
            {    
                updateValues['updated_at'] = current_date;


                db.Configuration.update(updateValues,
                        {
                            where:
                            {
                                user_id: data.user_id
                            }
                }).then((result) => {
                    return res.status(200).json({
                        message: lang.SUCCESS,
                    });

                });
            }else{
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
get currency branch 
============= */
module.exports.get_currency = (req, res) => {

    var authHeader = req.headers.authorization;
    var language = typeof req.body.query != 'undefined' ? req.body.query : "English";
    var lang = language_helper.load_language(language);
    if (authHeader) {
        var data = token_helper.verifyJwtToken(authHeader);

        if (data) {
            res.status(200).json({
                message: lang.SUCCESS,
                Currency: currencyData
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
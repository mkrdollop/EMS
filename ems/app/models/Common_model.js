
const connection = require("../config/db.js");

module.exports.getAllData = (table,key="",res) => {
    
    var query = "SELECT * FROM " + table;
    if (key!="")
    {
        query += " ORDER BY "+key+" DESC";
    }
    connection.query(query, function (err, rows) {
        if (err) {
            res(null, err);
        } else {
            res(null,rows);
        }
    });
    
};
module.exports.getAllDataWhere = (table,where, res) => {
    
    var query = "SELECT * FROM " + table + " WHERE  "+where;
    
    if (key!="")
    {
        query += " ORDER BY "+key+" DESC";
    }
    connection.query(query, function (err, rows) {

        if (err) {
            //console.log(err);
            res(null, err);
            
        } else {
            
            res(null,rows);
        }
    });
    
};

module.exports.insertData = function (data, result) {
    var table = data.table;
    sql.query("INSERT INTO " + table + " set ?", data.user, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

/* Task.getTaskById = function (taskId, result) {
    sql.query("Select task from tasks where id = ? ", taskId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
}; */

//module.exports = data;



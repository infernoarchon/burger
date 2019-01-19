var connection = require("./connection.js");

var orm = {
    selectAll: function(table,cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, table, function(err, result) {
        if (err) throw err;
        cb(result)
      });
    },
    insertOne: function(table,whatToInsert,cb) {
      var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?,false)";
      connection.query(queryString, [table,whatToInsert], function(err, result) {
        if (err) throw err;
        console.log(result)
      });
    },
    updateOne: function(whatToUpdate,devoured,table) {
        
    }
}

module.exports = orm;
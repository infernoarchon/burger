var connection = require("./connection.js");

var orm = {
    selectAll: function(table,cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, table, function(err, result) {
        if (err) throw err;
        cb(result)
      });
    },
    insertOne: function(table,whatToInsert) {
      var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?,false)";
      connection.query(queryString, [table,whatToInsert], function(err, result) {
        if (err) throw err;
      });
    },
    updateOne: function(table,id) {
      var queryString = "UPDATE ?? SET devoured = true WHERE id = ?";
      connection.query(queryString, [table,id], function(err, result) {
        if (err) throw err;
      });
        
    }
}

module.exports = orm;
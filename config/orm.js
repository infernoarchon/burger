var connection = require("./connection.js");

var orm = {
    selectAll: function(table,cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, table, function(err, result) {
        if (err) throw err;
        cb(result)
      });
    },
    insertOne: function(whatToInsert,devoured,table) {

    },
    updateOne: function(whatToUpdate,devoured,table) {
        
    }
}

module.exports = orm;
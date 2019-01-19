var orm = require("../config/orm.js");

var db = {
    getBurgers : function(cb) {
        orm.selectAll("burgers", function(result){
            cb(result)
        })
    },
    insertBurger : function() {
        orm.insertOne(burgername,"devoured","burgers")
    },
    updateBurger : function() {
        orm.updateOne(burgername,"devoured","burgers")
    }
}

module.exports = db;




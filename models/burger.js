var orm = require("../config/orm.js");

var db = {
    getBurgers : function(cb) {
        orm.selectAll("burgers", function(result){
            cb(result)
        })
    },
    insertBurger : function(userinput) {
        orm.insertOne("burgers",userinput)
    },
    updateBurger : function() {
        orm.updateOne(burgername,"devoured","burgers")
    }
}

module.exports = db;




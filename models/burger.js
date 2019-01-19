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
    updateBurger : function(id) {
        orm.updateOne("burgers",id)
    }
}

module.exports = db;




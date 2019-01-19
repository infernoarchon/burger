var db= require("../models/burger.js")



module.exports = function(app) {
    app.get("/", function(req,res){
        db.getBurgers(function(data){
            res.render("index", {burgers:data})
        })
    });
}
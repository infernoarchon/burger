var db= require("../models/burger.js")



module.exports = function(app) {
    app.get("/", function(req,res){
        db.getBurgers(function(data){
            res.render("index", {burgers:data})
        })
    });
    app.post("/api/burgers", function(req, res) {
        console.log(req.body)
        db.insertBurger(req.body.burger_name)
        res.end()
      });
}
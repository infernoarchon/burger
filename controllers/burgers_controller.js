var db= require("../models/burger.js")



module.exports = function(app) {
    app.get("/", function(req,res){
        db.getBurgers(function(data){
        var burgersavail = data.filter(function(burger) {
            return burger.devoured == false;
        })
        var burgersunavail = data.filter(function(burger){
            return burger.devoured == true;
        })
            res.render("index", {burgers: burgersavail,burgerseaten:burgersunavail})
        })
    });
    app.post("/api/burgers", function(req, res) {
        db.insertBurger(req.body.burger_name)
        res.end()
      });
    app.put("/api/burgers/:id", function(req,res) {
        db.updateBurger(req.params.id)
        res.end()
    })
}
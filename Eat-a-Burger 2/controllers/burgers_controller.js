var express = require("express");
var router = express.Router();

var db = require("../models");


router.get("/", function(req,res) {
    db.Burger.findAll({}).then(function(dbBurger) {
        console.log("dbBurger: " + dbBurger);
        var hbsObject = {
            burger: dbBurger
        };
        console.log("hbsObject" + hbsObject);
        return res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function(Burger) {
            res.redirect("/");
        });
});

router.put("/burgersmake/update", function(req, res) {
    console.log("update requested");

    db.Burger.update({
        devoured: false
    },{
        where: {
            id: req.body.burger_id
        }
       }
     ).then(function(dbBurger) {
        res.redirect("/");
    });
});

router.put("/burgerseat/update", function(req, res) {
    console.log("update requested");

    db.Burger.update({
        devoured: true
    },{
        where: {
            id: req.body.burger_id
        }
       }
     ).then(function(dbBurger) {
        res.redirect("/");
    });
});

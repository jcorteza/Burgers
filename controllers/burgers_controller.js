const express = require("express");
const burgers = require("../models/burger.js");

module.exports = function(app){
    app.get("/",(req, res) => {
        burgers.selectAll(function(data){
            hbsObject = {
                burgers: data
            }
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });
    app.post("/", (req, res) => {
        burgers.insertOne(req.body.burger_name, function(data){
            console.log(data);
        });
    });
    app.put("/", (req, res) => {
        burgers.updateOne(req.body.burger_name, function(data){
            console.log(data);
        });
    })
}

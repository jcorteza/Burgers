const express = require("express");
const burgers = require("../models/burger.js");

module.exports = function(app){
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.get("/",(req, res) => {
        burgers.selectAll(function(data){

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

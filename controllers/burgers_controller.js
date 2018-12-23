const burgers = require("../models/burger.js");

module.exports = function(app){
    let hbsObject = {
        burgers: []
    };
    app.get("/",(req, res) => {
        burgers.selectAll((data) => {
            hbsObject = {
                burgers: data
            }
            res.render("index", hbsObject);
        });
    });

    app.post("/", (req, res) => {
        const name = req.body.burgerName;
        burgers.selectOne(name, function(data) {
            if(data.length !== 0) {
                burgers.updateOne(0, name, (_) => {
                    hbsObject.burgers.push(data);
                });
            } else {
                burgers.insertOne(name, (_) => {
                    burgers.selectOne(name, function(data) {
                        hbsObject.burgers.push(data);
                    });
                });
            }
        });
    });

    app.put("/", (req, res) => {
        console.log(req.body.burgerName);
        burgers.updateOne(1, req.body.burgerName, (data) => {
            return res.json({successMessage:`Burger was successfully updated with the following data: ${JSON.stringify(data)}`});
        });
    });
}
//trying to push to heroku

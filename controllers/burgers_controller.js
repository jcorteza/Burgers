const burgers = require("../models/burger.js");

module.exports = function(app){
    app.get("/",(req, res) => {
        burgers.selectAll((data) => {
            if (data) {
                hbsObject = {
                    burgers: data
                }
                console.log(hbsObject);
                res.render("index", hbsObject);
            } else {
                return res.json({information: "No burger data in the db."});
            }
        });
    });
    app.post("/", (req, res) => {
        const name = req.body.burgerName;
        burgers.selectOne(name, function(data) {
            if(data) {
                burgers.updateOne(0, name, (data) => {
                    return res.json({successMessage: `Burger name existed in db so it was updated with the following data: ${data}`});
                });
            } else {
                burgers.insertOne(name, (data) => {
                    return res.json({successMessage: `Burger name didn't exist in db si it was added to the db with the following data: ${data}`});
                });
            }
        });
    });
    app.put("/", (req, res) => {
        burgers.updateOne(1, req.body.burgerName, (data) => {
            return res.json({successMessage:`Burger was successfully updated with the following data: ${data}`});
        });
    })
}
//trying to push to heroku

const burgers = require("../models/burger.js");

module.exports = function(app){
    let hbsObject;
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
                    return res.json({successMessage: `Burger name existed in db so it was updated with the following data: ${JSON.stringify(data)}`});
                });
            } else {
                burgers.insertOne(name, (data) => {
                    return res.json({successMessage: `Burger name didn't exist in db si it was added to the db with the following data: ${JSON.stringify(data)}`});
                });
            }
        });
    });

    app.put("/", (req, res) => {
        burgers.updateOne(1, req.body.burgerName, (data) => {
            return res.json({successMessage:`Burger was successfully updated with the following data: ${JSON.stringify(data)}`});
        });
    });
}
//trying to push to heroku

const burgers = require("../models/burger.js");

module.exports = function(app){
    app.get("/",(req, res) => {
        burgers.selectAll((data) => {
            let hbsObject = {
                burgers: data
            }
            // res.render("index", hbsObject);
            res.json(hbsObject);
        });
    });

    app.post("/", (req, res) => {
        const name = req.body.burgerName;
        burgers.selectOne(name, function(data) {
            if(data.length !== 0) {
                burgers.updateOne(false, name, (data) => {
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
        console.log(req.body.burgerName);
        burgers.updateOne(true, req.body.burgerName, (data) => {
            return res.json({successMessage:`Burger was successfully updated with the following data: ${JSON.stringify(data)}`});
        });
    });
}
//trying to push to heroku

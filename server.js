//seting up application connection and dependencies
const express = require("express");
let app = express();
const PORT = process.env.PORT || 4020;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//setting up handlebars for application use
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller")(app);

app.listen(PORT, function(err, response){
    if(err) throw err;
    console.log(`server listening on http://localhost:${PORT}`)
})
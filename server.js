const express = require("express");
let app = express();
const routes = require("./controllers/burgers_controller")(app);
const PORT = process.env.PORT || 4020;

app.listen(PORT, function(err, response){
    if(err) throw err;
    console.log(`server listening on http://localhost:${PORT}`)
})
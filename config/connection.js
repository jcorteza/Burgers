const mysql = require("mysql");
module.exports = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: null,
    port: 3306,
    database: "burgers_db"
});
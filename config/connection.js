const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection  = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: null,
    port: 3306,
    database: "burgers_db"
  });
};

connection.connect();
module.exports = connection;
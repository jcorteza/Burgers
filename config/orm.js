const connection = require("./connection");

module.exports = {
    selectAll: function(table, callback){
        const queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, data) {
            if(err) throw err;
            callback(data);
        });
    },
    selectFiltered: function(table, col, val, callback) {
        const queryString = "SELECT * FROM ?? WHERE ?? = ?;";
        connection.query(queryString, [table, col, val], function(err, data) {
            if(err) throw err;
            callback(data);
        });
    },
    insertOne: function(table, colOne, colTwo, valOne, valTwo, callback){
        const queryString = "INSERT INTO ??(??, ??) VALUES(?, ?);";
        connection.query(queryString, [table, colOne, colTwo, valOne, valTwo], function(err, data) {
            if(err) throw err;
            callback(data);
        });
    },
    updateOne: function(table, colToSet, valToSet, colFilter, valFilter, callback){
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
        connection.query(queryString, [table, colToSet, valToSet, colFilter, valFilter], function(err, data) {
            if(err) throw err;
            callback(data);
        });
    }
};
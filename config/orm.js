const connection = require("./connection");

module.exports = {
    selectAll: function(table, callback){
        const queryString = "SELECT * FROM ??;"
        connection.query(queryString, [table], function(err, data) {
            if(err) throw err;
            console.log(data);
            callback(data);
        });
    },
    insertOne: function(table, colOne, colTwo, valOne, valTwo, callback){
        const queryString = "INSERT INTO ??(??, ??) VALUES(?, ?);"
        connection.query(queryString, [table, colOne, colTwo, valOne, valTwo], function(err, data) {
            if(err) throw err;
            console.log(data);
            callback(data);
        });
    },
    updateOne: function(table, colToSet, valToSet, colFilter, valFilter, callback){
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;"
        connection.query(queryString, [table, colToSet, valToSet, colFilter, valFilter], function(err, data) {
            if(err) throw err;
            console.log(data);
            callback(data);
        });
    }
};
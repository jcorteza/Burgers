const orm = require("../config/orm.js");

module.exports = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    updateOne: function(valFilter, cb){
        orm.updateOne("burgers", "devoured", 1, "burger_name", valFilter, function(res){
            cb(res);
        });
    },
    insertOne: function(valOne, cb){
        orm.insertOne("burgers", "burger_name", "devoured", valOne, 0, function(res){
            cb(res);
        });
    }
}
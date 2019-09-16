var MongoClient = require('Mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db) {
    if(err) throw err;
    var dbo = db.db("budgetappdb");
    dbo.createCollection("users",function(err,res){
        if(err) throw err;
        console.log("Users collection created!");
        db.close();
    })
})
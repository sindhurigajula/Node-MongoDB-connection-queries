var MongoClient = require('Mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("budgetappdb");
    var userobj = {userid:12875,username:"Neel",budget:10000,expense:5000,balance:5000,expenselist:
        [{id:1,expense:1000,expensename:"Rent"},
            {id:2,expense:4000,expensename:"Others"}]};
    dbo.collection("users").insertOne(userobj,function(err,res){
        if(err) throw err;
        console.log("User obj added");
        db.close();
    });
});
// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017", function(err, client) {
    if(err) { 
      return console.dir(err); 
    }

    var db = client.db("sample");
    /* db.collection('marketing').findOne({}, function (findErr, result) { 
        if (findErr) {
            throw findErr;
        }
        console.log(result);
        client.close(); 
    }); */

    db.collection('marketing').find({}).toArray(function (err, result) {
        console.log(result);
    });

    db.executeDbAdminCommand({logRotate: 1});
    
});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hevari");
  /*Return only the documents where the address starts with an "S":*/
  var query = { address: /^P/ };
  dbo.ilmo-2021("Name").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

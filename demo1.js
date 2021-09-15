var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://hevari:Kontio1961&@cluster0.beap7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

MongoClient.connect(url, function(err, db) {

    var cursor = db.collection('ilmo-2021').find({Name: "Partanen Jari"});

    cursor.each(function(err, doc) {

        console.log(doc);

    });
});
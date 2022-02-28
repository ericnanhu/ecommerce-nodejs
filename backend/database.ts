var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ecommerce";

MongoClient.connect(url, function(err:any, db:any) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
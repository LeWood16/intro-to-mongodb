var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/test';
mongodb.MongoClient.connect(uri, function(error, db) {
  if (error) {
      console.log(error);
      process.exit(1);
  }
  
  db.collection('test').insert({ x: 1 }, function(error, result) {
      if (error) {
          console.log(error);
          process.exit(1);
      }
      
      db.collection('test').find().toArray(function(error, docs) {
          if (error) {
              console.log(error);
              process.exit(1);
          }
      })
  })
})
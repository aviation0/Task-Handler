const { MongoClient, ObjectID } = require('mongoDB');

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-handle";


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);

  db.collection('users').findOne({ nmae: "Avi"}, (error, user) => {
    if(error) {
      return console.log("Can't find");
    }
    return console.log(user);
  });

});
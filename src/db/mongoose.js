const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log("Connection to database has now been established.");
}).catch((e) => {
  console.log("Database Error, Please check connection.");
});
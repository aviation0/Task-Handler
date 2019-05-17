const express = require('express');
require('./db/mongoose'); //running the module
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// //Maintenance middleware
// app.use((req, res, next) => {
//   res.status(503).send("Server is under maintainance");
// });

//To parse json from body
app.use(express.json());
//Routers
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port: ' + port);
})

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'heythere', { expiresIn: '7 days' });
//   console.log(token);

//   const data = jwt.verify(token, 'heythere');
//   console.log(data);
// };

// myFunction();
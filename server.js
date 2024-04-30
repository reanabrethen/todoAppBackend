
const mongoose = require("mongoose");

const app = require("./app");

const port = 3000;

mongoose//starts database
  .connect("mongodb://127.0.0.1:27017/todo-backend", {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("hello")
    app.listen(port, () => { //starts server and logs a success statement
      console.log(`Server connected on ${port}`);
      console.log("MongoDB Connected");
    });
  })
  .catch((e) => {
    console.log(e);//logs errors
  });

 
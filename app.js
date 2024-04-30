var express = require("express");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const todoRouter = require("./routes/todo/todoRouter")

var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/todos", todoRouter)

module.exports = app
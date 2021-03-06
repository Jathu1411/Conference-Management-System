const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const research = require("./routes/research");
const bodyParser = require("body-parser");
const notification = require("./routes/notification");
const workshop = require("./routes/workshop");
const userRouter = require("./routes/user");
require("dotenv").config();
// const app = require('./tests/AppTest')

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB successfully");
});
console.log("Check 1");
//import created routes here

//assign routes to use
app.use("/api/user", userRouter);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", research.routes);
app.use("/api", workshop.routes);

app.use("/api", notification);

//error handling
app.use((error, req, res, next) => {
  console.log("Check 2");
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

module.exports = app;

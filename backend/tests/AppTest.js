const express = require("express");
const userRouter = require("../routes/user");
const research = require("../routes/research");
const notification = require("../routes/notification");
const workshop = require("../routes/workshop");
const app = express();


//assign routes to use
app.use("/api/user", userRouter);


app.use("/api", research.routes);
app.use("/api", workshop.routes);

app.use("/api", notification);

module.exports = app;  
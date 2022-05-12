const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const pool = require("./databaseConnection");

const userRouter = require("./routes/userRoutes");
const testRouter = require("./routes/testRoutes");
const slotRouter = require("./routes/slotRouter");

app.use("/api/v1/users", userRouter);
app.use("/api/v1/testing", testRouter);
app.use("/api/v1/slot", slotRouter);

module.exports = app;

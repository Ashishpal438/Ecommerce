const express = require("express");

const app = express();
const cookieParser = require("cookie-parser");

const errorMiddlware = require("./middleware/error");

const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Route imports
const products = require("./routes/productRoutes");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoutes");

app.use("/api/v1", products);
app.use("/api/v1", user);
app.use("/api/v1", order);

//Middleware for Errors
app.use(errorMiddlware);

module.exports = app;

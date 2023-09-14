const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
const routers = require("./routers");
const path = require("path");

dotenv.config({
    path: "./config/env/config.env"
});

// MongoDb Connection

connectDatabase();

const app = express();

// Express - Boddy Middleware
app.use(express.json());

const PORT = process.env.PORT;

//Routers Middleware

app.use("/api", routers);

//Error Handler

app.use(customErrorHandler);
    
// Static Files
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);
});
require("dotenv").config({ path: "./InternalPaper/.env" });
const connectDB = require("./db/connection");
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

async function start() {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on ${port}...`))
    }
    catch (ex) {
        console.log(ex);
    }
}
start();
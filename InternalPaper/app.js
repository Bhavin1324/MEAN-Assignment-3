require("dotenv").config({ path: "./InternalPaper/.env" });
const connectDB = require("./config/connection");
const express = require("express");
const app = express();
const router = require("./routes/vehicle");
const path = require("path");

const port = process.env.PORT || 5000;

app.use(express.static("./InternalPaper/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')))


app.use("/api/vehicle", router);

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
require("dotenv").config({ path: "./backend/.env" });
const connectDB = require("./config/connection");
const express = require("express");
const app = express();
const router = require("./routes/shopping");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static("./backend/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  "/css",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/jquery/dist"))
);

app.use("/api/shop", router);

async function start() {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on ${port}...`));
  } catch (ex) {
    console.log(ex);
  }
}
start();

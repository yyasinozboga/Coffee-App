const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect("mongodb://localhost:27017/coffeesdb")
  .then(() => console.log("🥎 Connected to MongoDB"))
  .catch(() => console.log("💥 Error connecting to MongoDB"));

const port = 3000;

app.listen(port, () => console.log("⚾ Connected to MongoDB"));

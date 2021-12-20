const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookies = require('cookie-parser');
require("./models/Event/Event");
require("./models/Accounts/Organizer");
require("./models/Accounts/Student");
const authRoutes = require("./routes/Auth");
const profileRoutes = require("./routes/profiles")
// import keys from './config/keys';
// const {keys} =  require('./config/keys');
require("dotenv").config();

mongoose.Promise = global.Promise;

const app = express();
const PORT = process.env.SERVER_PORT || 1000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((e: Error) => {
    console.log(e);
  });

app.use(cors());
app.use(cookies());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.get("/", (req, res) => {
  res.send("Helllloooooo another change");
})

app.get("/servertest", (req, res) => {
  return res.json({data: "yay it's working"});
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

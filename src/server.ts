const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("./models/Event/Event");
require("./models/Accounts/Organizer");
require("./models/Accounts/Student");
const authRoutes = require("./routes/Auth/authRoutes")
// import keys from './config/keys';
// const {keys} =  require('./config/keys');
require("dotenv").config();

mongoose.Promise = global.Promise;

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(() =>
{
    console.log("connected to mongo");
}).catch((e: Error) =>
{
    console.log(e);
});

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);


app.listen(PORT, () =>
{
    console.log(`server running on port ${PORT}`);
})
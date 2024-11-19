const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
// const connectDB = require("./config/db");

//Load env vars
dotenv.config();

//Load models
const Bootcamp = require("./models/bootcamp");

//Connect to DB
mongoose.connect(process.env.MONGO_URI, {});
// connectDB();

//Read JSON files
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);

//Import into DB
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);

    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//Delete DB data
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();

    console.log("Data Destroyed...".red.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}

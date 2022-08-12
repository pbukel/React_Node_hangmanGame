const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/mainRouter");
const app = express();

app.listen(4000);
app.use(cors());
app.use(express.json());

app.use("/", mainRouter);

// const mongoose = require("mongoose");

// mongoose
//   .connect(
//     "mongodb+srv://admin:admin@cluster0.ddafgxm.mongodb.net/?retryWrites=true&w=majority"
//   )
//   .then((res) => {
//     console.log("conected");
//   })
//   .catch((e) => {
//     console.log("error");
//   });

// const itemSchema = require("./schemas/itemSchema");

// function writeToDb() {
//   const item = new itemSchema();
//   item.username = "jonas";
//   item.location = "vilnius";
//   item.age = 45;

//   item
//     .save()
//     .then(() => {
//       console.log("all good");
//     })
//     .catch((e) => {
//       console.log("write error");
//     });
// }

// writeToDb();

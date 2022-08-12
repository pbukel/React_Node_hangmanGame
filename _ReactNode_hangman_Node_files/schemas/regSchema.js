const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemModel = new Schema({
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  money: {
    type: Number,
    required: false,
    default: 1000,
  },
});

module.exports = mongoose.model("regItems", itemModel);

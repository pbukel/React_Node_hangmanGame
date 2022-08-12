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

  points: {
    type: Number,
    required: false,
    default: 30,
  },
});

module.exports = mongoose.model("gameRegItems", itemModel);

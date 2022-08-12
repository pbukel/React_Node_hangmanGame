const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemModel = new Schema({
  model: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("carItems", itemModel);

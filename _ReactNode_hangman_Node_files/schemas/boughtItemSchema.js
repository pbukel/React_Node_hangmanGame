const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemModel = new Schema({
  picture: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  buyer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("bothItems", itemModel);

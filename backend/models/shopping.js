const mongoose = require("mongoose");
const shoppingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name of the item is required"],
  },
  price: {
    type: Number,
    required: [true, "Name of the item is required"],
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("carts", shoppingSchema);

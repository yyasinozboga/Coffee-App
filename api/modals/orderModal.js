const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  id: String,
  name: String,
  category: String,
  price: Number,
  amount: Number,
  image: String,
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;

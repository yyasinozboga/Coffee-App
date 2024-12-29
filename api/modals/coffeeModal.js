const mongoose = require("mongoose");

const coffeeSchema = mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  size: [String],
  rating: {
    average: Number,
    count: Number,
  },
  isHot: String,
  description: String,
  image: String,
});

const Coffee = mongoose.model("coffee", coffeeSchema);

module.exports = Coffee;

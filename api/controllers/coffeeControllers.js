const Coffee = require("../modals/coffeeModal");
const Order = require("../modals/orderModal");

exports.getAllCoffees = async (req, res) => {
  let coffees;

  const selecteds = "_id,name,category,rating,image,price";

  if (req.query.category) {
    coffees = await Coffee.find({ category: req.query.category }).select(
      selecteds.replaceAll(",", " ")
    );
  } else {
    coffees = await Coffee.find().select(selecteds.replaceAll(",", " "));
  }

  if (!coffees) {
    return res.status(404).json({ message: "No coffees found" });
  }

  res.status(200).json(coffees);
};

exports.getCoffee = async (req, res) => {
  const coffee = await Coffee.findById(req.params.id);

  if (!coffee) {
    return res.status(404).json({ message: "Coffee not found" });
  }

  res.status(200).json(coffee);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find();

  if (!orders) {
    return res.status(404).json({ message: "Orders not found" });
  }

  res.status(200).json(orders);
};

exports.addCoffeeToOrders = async (req, res) => {
  const coffee = await Order.create({ ...req.body, amount: 1 });

  if (!coffee) {
    return res.status(404).json({ message: "Coffee didn't add to orders" });
  }

  res.status(201).json(coffee);
};

exports.deleteCoffeeFromOrders = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Coffee was deleted successfully!" });
  } catch (error) {
    res.status(404).json({ message: "Coffee was not deleted" });
  }
};

exports.updateCoffeeFromOrders = async (req, res) => {
  const coffee = await Order.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );

  if (!coffee) {
    return res.status(404).json({ message: "Coffee not found" });
  }

  res.status(200).json(coffee);
};

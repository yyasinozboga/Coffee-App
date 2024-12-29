const express = require("express");
const {
  getAllCoffees,
  getCoffee,
  getOrders,
  addCoffeeToOrders,
  deleteCoffeeFromOrders,
  updateCoffeeFromOrders,
} = require("../controllers/coffeeControllers");

const router = express.Router();

router.get("/coffees", getAllCoffees);

router.get("/coffees/:id", getCoffee);

router.route("/orders").get(getOrders).post(addCoffeeToOrders);

router
  .route("/orders/:id")
  .delete(deleteCoffeeFromOrders)
  .patch(updateCoffeeFromOrders);

module.exports = router;

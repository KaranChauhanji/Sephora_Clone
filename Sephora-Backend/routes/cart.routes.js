const express = require("express");
const userAuth = require("../middlewares/auth.middleware");
const addToCart = require("../controllers/CartReq/addToCart.controller");
const getCartItems = require("../controllers/CartReq/getCartItems.controllers");
const removeFromCart = require("../controllers/CartReq/removeFromCart.controller");
const cartRouter = express.Router();

cartRouter.get("/", userAuth, getCartItems);
cartRouter.post("/add/:productID", userAuth, addToCart);
cartRouter.delete("/remove/:productID", userAuth, removeFromCart);

module.exports = cartRouter;

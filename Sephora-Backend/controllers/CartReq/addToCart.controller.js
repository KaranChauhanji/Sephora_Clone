const CartModel = require("../../models/cart.model");

const addToCart = async (req, res) => {
  const { userID, quantity = 1 } = req.body;
  const { productID } = req.params;

  try {
    const existingCartItem = await CartModel.findOne({ userID, productID });

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      return await existingCartItem.save();
    }

    const newCartItem = new CartModel({ userID, productID, quantity });
    await newCartItem.save();

    res.status(200).send({ message: "Item added to Cart", newCartItem });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = addToCart;

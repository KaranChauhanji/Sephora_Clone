const CartModel = require("../../models/cart.model");

const removeFromCart = async (req, res) => {
  const { productID } = req.params;

  try {
    const cartItem = await CartModel.findOne({ productID });

    if (!cartItem) {
      return res.status(404).send({ message: "Item not found in cart" });
    }

    await CartModel.findByIdAndDelete(cartItem._id);
    res.status(200).send({ message: "Item removed from cart." });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = removeFromCart;

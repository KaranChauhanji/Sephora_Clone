const ProductModel = require("../models/product.model");

const cart = async (req, res, next) => {
  const { productID } = req.params;

  try {
    const product = await ProductModel.findOne({ _id: productID });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
module.exports = cart;

const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  images: [{ type: String, required: true }],
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [{ type: String, required: true }],
  types: [{ type: String, required: true }],
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;

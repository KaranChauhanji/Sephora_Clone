const ProductModel = require("../../models/product.model");

const productGet = async (req, res) => {
  const limit = parseInt(req.query.limit);
  const page = parseInt(req.query.page) || 1;
  const skipping = limit * (page - 1);
  const search = req.query.search;
  const singleQuery = req.query;

  let query = {};

  if (search) {
    query.$or = [
      { tags: { $regex: search, $option: "i" } },
      { category: { $regex: search, $option: "i" } },
      { title: { $regex: search, $option: "i" } },
      { description: { $regex: search, $option: "i" } },
    ];
  }

  if (req.query.category) {
    query.category = req.query.category;
  }

  if (req.query.minPrice && req.query.maxPrice) {
    query.price = { $gte: req.query.minPrice, $lte: req.query.maxPrice };
  }

  let API_URL = ProductModel.find(query);

  if (req.query.page || req.query.limit) {
    API_URL.skip(skipping).limit(limit);
  }

  if (Object.keys(singleQuery).length > 0 && Object.keys(query).length === 0) {
    API_URL = ProductModel.find(singleQuery);
  }

  try {
    const allProducts = await ProductModel.find(query);
    const products = await API_URL;
    const totalProducts = allProducts.length;
    const totalPages = Math.ceil(totalProducts / limit) || 1;

    res.status(200).send({
      totalProducts,
      currentPage: page,
      totalPages,
      productsPerPage: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = productGet;

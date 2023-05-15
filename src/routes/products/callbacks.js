const mCartService = require("../../service/users");

const getAll = async (req, res, next) => {
  try {
    let products = await mCartService.getAllProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    let productId = req.params.productId;
    let productDetails = await mCartService.getProductById(productId);
    res.json(productDetails);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById
};

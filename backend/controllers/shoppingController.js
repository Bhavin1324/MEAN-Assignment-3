const ShoppingCart = require("../models/shopping");
const createProduct = async (req, res) => {
  const data = await ShoppingCart.create(req.body);
  res.status(201).json({ result: data, err: "" });
};
const getAllProduct = async (req, res) => {
  const data = await ShoppingCart.find({});
  res.status(201).json({ result: data, err: "" });
};
const getSingleProduct = async (req, res, next) => {
  const { id } = req.params;
  const data = await ShoppingCart.findOne({ _id: id });
  if (!data) {
    return res
      .status(404)
      .json({ result: "", err: `unable to find the item with ${id}` });
  }
  res.status(200).json({ result: data, err: "" });
};
const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const data = await ShoppingCart.findOneAndUpdate({ _id: id }, req.body, {
    runValidators: true,
    new: true,
  });
  if (!data) {
    return res
      .status(404)
      .json({ result: "", err: `unable to find the item with ${id}` });
  }
  res.status(200).json({ result: data, err: "" });
};
const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  const data = await ShoppingCart.findOneAndDelete({ _id: id });
  if (!data) {
    return res
      .status(404)
      .json({ result: "", err: `unable to find the item with ${id}` });
  }
  res.status(200).json({ result: data, err: "" });
};
module.exports = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};

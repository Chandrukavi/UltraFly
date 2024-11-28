const Product = require('../models/product');

// Create Product
const createProduct = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    const image = req.file.filename;

    if (!name || !price || !category || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = new Product({ name, price, category, description, image });
    await product.save();

    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createProduct, getAllProducts };

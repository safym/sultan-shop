const express = require("express");
const mongoose = require("mongoose");
const { Product } = require("./models");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  return res.json({ message: "Hello" });
});

app.get("/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error" });
  }
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = new Product({ ...req.body });
    const insertedProduct = await newProduct.save();
    return res.status(201).json(insertedProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const thisId = req.params.id;
    await Product.updateOne({ id: thisId }, req.body);
    const updatedProduct = await Product.find({ id: thisId });
    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error" });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const thisId = req.params.id;
    const product = await Product.find({ id: thisId });
    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error" });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const thisId = req.params.id;
    const deletedCount = await Product.deleteOne({ id: thisId });
    return res.status(200).json(deletedCount);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error" });
  }
});

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://sultan:sultan@mongo:27017/sultan?authSource=admin"
    );
    app.listen(3005, () => console.log("listening"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const productRoutes = require("./routes/product");

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const connectDB = require("./config/db");
connectDB();


app.use("/api/products", productRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Internal server error" });
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

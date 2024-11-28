const express = require("express");
const { createProduct, getAllProducts } = require("../controllers/productController");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();


router.post("/", upload.single("image"), createProduct);
router.get("/", getAllProducts);

module.exports = router;

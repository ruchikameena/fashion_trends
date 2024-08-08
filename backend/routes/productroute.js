const express = require("express");
const getproductcontroller = require("../controllers/products/getproductcontroller");

const router = express.Router();

router.get("/", getproductcontroller);

// router.get("/fashiontrend",getproductcontroller);

router.get("/category/:category", getproductcontroller); //: iske badhka url parameter hota hai

router.get("/name/:name", getproductcontroller);

router.get("/sub_category/:sub_category", getproductcontroller);

router.get("/id/:id", getproductcontroller);

router.get("/random", getproductcontroller);

router.get("/top_rated", getproductcontroller);

router.get("/low_to_high", getproductcontroller);

router.get("/high_to_low", getproductcontroller);

module.exports = router;
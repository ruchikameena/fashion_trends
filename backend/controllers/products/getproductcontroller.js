const mongoose = require("mongoose");
const ProductCollection = require("../../models/ProductSchema");

const getproductcontroller = async (req, res) => {

    try {
        const { category, name, sub_category } = req.params; //url se koi cheze jayegi toh paramas----,req.body,req.files bhi hota hai 
        let products;
        if (category) {
            const searchCategory = category.toLowerCase();
            products = await ProductCollection.find({
                category: { $regex: new RegExp(searchCategory, "i") } //regex is for database and regexp is for javascript inh dono ka comparision ho raha hai...
            });
        }
        else if (name) {
            const searchname = name.toLowerCase();
            products = await ProductCollection.find({
                name: { $regex: new RegExp(searchname, "i") }
            });
        }
        else if (sub_category) {
            searchsubcategory = sub_category.toLowerCase();
            products = await ProductCollection.find({
                sub_category: { $regex: new RegExp(searchsubcategory, "i") }
            });
        }
        else {
            products = await ProductCollection.find();
            console.log("product fetch ");
        }

        if (!products || products.length === 0) {
            return res.status(404).json({ message: "Product not found" });
          }

        res.status(200).send(products);
    }
    catch (error) {
        res.status(504).send({
            message: "error"
        });
        console.log(`error :${error}`)
    }
}
module.exports = getproductcontroller;
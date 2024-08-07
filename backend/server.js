const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const rootroute = require("./routes/rootroute");
const productroute = require("./routes/productroute");
const connectDB = require("./config/db");

dotenv.config();
const PORT = process.env.PORT || 3000 || 6000;
const app = express();
connectDB();

app.get("/", rootroute);

app.use("/fashiontrends", productroute);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgYellow.white);
});
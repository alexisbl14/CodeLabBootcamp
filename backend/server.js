const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors({
	origin: "http://localhost:3000",
	credentials: true,
}));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("dotenv").config();

const productRouter = require("./routes/products");
app.use("/products", productRouter);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});

app.get("/cors", (req, res) => {
	res.set("Access-Control-Allow-Origin", "http://localhost:3000");
	res.send({ "msg": "This has CORS enabled 🎈" });
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB database connection established successfully.");
});
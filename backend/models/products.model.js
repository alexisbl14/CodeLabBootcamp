const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Example Schema to POST in Insomia (http://localhost:5000/products/add):
// {
// 	"name" : "Purple Dress",
// 	"description" : "This is a very pretty purple dress",
// 	"price" : 1899,
// 	"image" : "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/33144/dress-clothing-clipart-xl.png",
// 	"liked" : false
// }

const productsSchema = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		price: { type: Number , required: true },
		image: { type: String, required: true },
		liked: { type: Boolean, required: true },
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model("Products", productsSchema);
module.exports = Product;
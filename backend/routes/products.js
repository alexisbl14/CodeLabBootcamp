const router = require("express").Router();
const { NavItem } = require("react-bootstrap");
const Product = require("../models/products.model.js");

router.route("/").get((req, res) => {
	console.log("Request received:", req);
	res.send("Hello World!");
});

router.route("/get-all-products").get((req, res) => {
	Product.find()
		.then(product => res.json(product))
		.catch(err => res.status(400).json("Error: " + err));
});

// name: { type: String, required: true },
// description: { type: String, required: true },
// price: { type: Number , required: true },
// image: { type: String, required: true },
// liked: { type: Boolean, required: true },
//POST request (Create)
router.route('/add').post((req, res) => {
	const name = req.body.name;
	const description = req.body.description;
	const price = req.body.price;
	const image = req.body.image;
	const liked = false;
	if(req.body.liked) {
		liked = req.body.liked;
	};

	const newProduct = new Product({
		name,
		description,
		price,
		image,
		liked,
	});

	newProduct.save()
		.then(() => res.json('New Product Added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});
//GET request (Read)
router.route('/get/:id').get((req, res) => {
	Product.findById(req.params.id)
		.then(product=>res.json(product))
		.catch(err=>res.status(400).json('Error: ' + err));
});
//UPDATE request
router.route('/update/:id').put((req, res) => {
	Product.findById(req.params.id)
	.then(product => {
		if(req.body.name) {
			product.name = req.body.name;
		}
		if(req.body.description) {
			product.description = req.body.description;
		}
		if(req.body.price) {
			product.price = req.body.price;
		}
		if(req.body.image) {
			product.image = req.body.image;
		}
		product.liked = false;
		if(req.body.liked) {
			product.liked = req.body.liked;
		}

		product.save()
			.then(() => res.status(200).json("Item updated!"))
			.catch(err=>res.status(400).json('Error: ' + err));
	});
});
//DELETE request
router.route('/delete/:id').delete((req, res) => {
	Product.findByIdAndDelete(req.params.id)
		.then(product => res.json(product))
		.catch(err=>res.status(400).json('Error: ' + err));
});

module.exports = router;
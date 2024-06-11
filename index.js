const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();

app.use(express.json());

const uri =
	'mongodb+srv://admin:Maxima%401886@backenddb.oeak0jm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB';

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
	res.send('Hello from node api server');
});

app.get('/api/products', async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.post('/api/products', async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

mongoose
	.connect(uri)
	.then(() => {
		console.log('Connected to database');
	})
	.catch((error) => {
		console.error('Connection failed:', error);
	});

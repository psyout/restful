const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoutes = require('./routes/product.route.js');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const uri = process.env.MONGODB_URI;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
	res.send('Hello from Node Api server');
});

app.use('/api/products', productRoutes);

mongoose
	.connect(uri)
	.then(() => {
		console.log('Connected to database');
	})
	.catch((error) => {
		console.error('Connection failed:', error);
	});

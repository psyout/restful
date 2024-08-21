const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.route.js');
const dotenv = require('dotenv');

dotenv.config();
const uri = process.env.MONGODB_URI;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('Response from Node API Server');
});

mongoose
	.connect(uri)
	.then(() => {
		console.log('Connected to database');
		app.listen(3000, () => {
			console.log('Server is running on port 3000');
		});
	})
	.catch((error) => {
		console.error('Connection failed:', error);
	});

//route
app.use('/api/products', productRoutes);

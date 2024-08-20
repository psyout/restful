const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please enter a product name'],
		},

		address: {
			type: String,
			required: true,
		},

		addressFull: {
			type: String,
			required: true,
		},

		phone: {
			type: Number,
			required: true,
			default: 0,
		},

		time: {
			type: [String],
			required: true,
			default: [],
		},

		menu: {
			drinks: {
				type: [String],
				required: true,
				default: [],
			},
			food: {
				type: [String],
				required: true,
				default: [],
			},
		},

		coordinates: {
			latitude: {
				type: Number,
				required: true,
			},
			longitude: {
				type: Number,
				required: true,
			},
		},

		image_url: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

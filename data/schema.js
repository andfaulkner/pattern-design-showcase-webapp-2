// DATABASE
const mongoose = require('mongoose')
const restify = require('express-restify-mongoose')

const schema = {
	images: {
		_id: { type: String, required: true },
		src: { type: String, required: true },
		inCarousel: { type: Boolean, required: true },
		inGallery: { type: Boolean, required: true },
		isThumb: { type: Boolean, required: true },
		linkedParent: Boolean,
		date: { type: Date, default: Date.now }
	},
	designs: {
		_id: { type: String, required: true },
		title: { type: [String], required: true },
		dateCompleted: { type: String, required: true },
		sticky: { type: Boolean, default: false },
		textContent: { type: [String], required: true },
		link: { type: String, required: true },		
		date: { type: Date, default: Date.now }
	},
	updates: {
		_id: { type: String, required: true },
		title: { type: [String], required: true },
		dateCompleted: { type: String },
		textContent: { type: [String], required: true },
		image: { type: String },		
		date: { type: Date, default: Date.now }
	},
	bios: {
		_id: { type: String, required: true },
		designsIntro: { type: String, required: true },
		homeFillerImg: {
			src: { type: String, required: true },
		},
		footer: {
			authors: { type: String, required: true },
			company: { type: String, required: true }
		},
		date: { type: Date, default: Date.now }
	},
};

module.exports = schema;
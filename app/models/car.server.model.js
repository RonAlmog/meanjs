'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Car Schema
 */
var CarSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Car name',
		trim: true
	},
	maker:{
		type: String,
		default: '',
		required: 'Please fill Car maker',
		trim: true
	},
	engine:{
		type: String,
		default: '',
		required: 'Please fill Engine size',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Car', CarSchema);

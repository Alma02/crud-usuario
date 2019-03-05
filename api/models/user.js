'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
	name: String,
	address: String,
	telephone: String
});

module.exports = mongoose.model('User', UserSchema);
var mongoose = require('mongoose');

var inmateSchema = new mongoose.Schema({
	id_num: String,
	charge_num: String,
	firstname: String,
	lastname: String,
	gender: String,
	dob: String,
	court: String,
	lad: String,
	nad: String,
	offence: String,
	remark: String
});

module.exports = mongoose.model("Inmate", inmateSchema);
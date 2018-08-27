var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

// require the model you want to use
var Inmate = require('./models/inmate');

//template engine
app.set('view engine', 'ejs');

//Accessing asset globally
app.use(express.static(__dirname + "/public"));

// Connection URL
mongoose.connect("mongodb://localhost/pms");

app.use(bodyParser.urlencoded({
	extended: true
}));

// Dasboard Route 
app.get('/', function (req, res) {
	res.render("dashboard");
});

//inmate Route 
app.get('/inmate', function (req, res) {
	res.render("inmate");
});

app.post('/saveinmates', function (req, res) {
	newInmate = new Inmate();

	newInmate.id_num = req.body.id_num;
	newInmate.charge_num = req.body.charge_num;
	newInmate.firstname = req.body.firstname;
	newInmate.lastname = req.body.lastname;
	newInmate.gender = req.body.gender;
	newInmate.dob = req.body.dob;
	newInmate.court = req.body.court;
	newInmate.lad = req.body.lad;
	newInmate.nad = req.body.nad;
	newInmate.offence = req.body.offence;
	newInmate.remark = req.body.remark;

	newInmate.save(function (err, createdinmate) {
		if (err) {
			res.send('error while saving');
		} else {
			console.log(createdinmate);
			res.send(createdinmate);
		}
	});
});

app.listen(2000, function () {
	console.log('Hello am running on port 2000!');
});
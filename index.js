const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const update = require('./updateData');
const heroes = require('./data/heroNames');
const analyzeHero = require('./heroAnalyze');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, '/dist')))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function(req, res){
	console.log('req.body', req.body);
	let analyzedHero = 0;
	analyzeHero(req.body.hero, function (data){
		data.sort(function(a, b){return b.adv - a.adv});
		analyzedHero++;
		res.send(data);
	});
})

app.get('/heronames', function(req, res){
	res.send(heroes);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000')
})

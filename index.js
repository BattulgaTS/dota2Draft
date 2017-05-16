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
	var ret = [];
	heroes.forEach(function(entry){
		ret.push({
			name: entry,
			adv: 0
		})
	})
	req.body.hero.some(function(entry) {
		if (heroes.indexOf(entry) !== -1){
			analyzeHero(entry, ret, function (data){
				data.sort(function(a, b){return b.adv - a.adv});
				analyzedHero++;
				if (analyzedHero === req.body.hero.length) {
					res.send(data);
				}
			});	
		} else {
			res.send(ret);
			return true;
		}
	})
})

app.get('/heronames', function(req, res){
	var ret = [];
	heroes.forEach(function(entry){
		ret.push({
			name: entry,
			adv: 0
		})
	})
	res.send(ret);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000')
})

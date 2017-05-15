const waterfall = require('async-waterfall');
const fs = require('fs');
const axios = require('axios');

const handleHtml = require('./htmlParser');
const heroes = require('./data/heroNames');

module.exports = function (){
	let tasks = [];
	heroes.forEach(function (entry) {
		var task = function(callback) {
			let url = "https://www.dotabuff.com/heroes/" + entry + "/matchups";
			axios.get(url).then(function(res) {
				handleHtml(res.data, function(data) {
					fs.writeFile('./data/matchUps/' + entry + ".json", 
							JSON.stringify(data, null, '\t'), function(err){
						if (err) throw err;
						callback(null);
					});
				})
			})
		}
		tasks.push(task);
	})

	waterfall(tasks, function(err){
		if (err) throw err;
		console.log("done");
	})
}
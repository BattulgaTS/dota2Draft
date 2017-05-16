module.exports = function analyzeHero(hero, data, callback){
	const matchUps = require('./data/matchUps/' + hero);
	matchUps.forEach(function (entry){
		let pos = data.map(function(x) { return x.name }).indexOf(entry.name);
		if (pos !== -1) data[pos].adv -= entry.adv;
	});
	callback(data);
}

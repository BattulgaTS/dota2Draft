let data = []
const heroes = require('./data/heroNames');

heroes.forEach(function (entry){
	let hero = {};
	hero.name = entry;
	hero.adv = 0;
	data.push(hero);
})

module.exports = function analyzeHero(hero, callback){
	const matchUps = require('./data/matchUps/' + hero);
	matchUps.forEach(function (entry){
		let pos = data.map(function(x) { return x.name }).indexOf(entry.name);
		if (pos !== -1) data[pos].adv -= entry.adv;
	});
	callback(data);
}

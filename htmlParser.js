module.exports = function handleHtml(data, cb){
	var words = data.split(" ");
	var name = 'none', adv = -9999, win = -9999, found = false;
	let matchups = [];
	let against = {};
	let ok = false;
	for (i in words){
		if (words[i].indexOf("heroes&#47;") !== -1){
			let sIdx = words[i].indexOf("heroes&#47;") + 11;
			let eIdx = words[i].length - 5;
			against.name = words[i].substring(sIdx, eIdx);
		}
		if (words[i].indexOf("%<div") !== -1){
			let s = words[i].indexOf('"') + 1;
			let e = words[i].lastIndexOf('"');
			if (!ok){
				against.adv = parseFloat(words[i].substring(s, e));
				ok = true;
			} else {
				against.winRate = parseFloat(words[i].substring(s, e));
				ok = false;
				matchups.push(against);
				against = {};
			}
		}
	}
	cb(matchups);
};
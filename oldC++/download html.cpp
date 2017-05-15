#include <cstdio>
#include <iostream>
#include <string>
#include <fstream>
using namespace std;

void delay(int n){
	long long k = 1LL;
	for (long long i = 0; i < n * 1000000000; i++){
		k++;
	}
}

int main(){
	string names[110] ={"abaddon", "juggernaut", "lifestealer", "pudge", "legion-commander", "skywrath-mage", "shadow-shaman", "batrider", "slardar", "bounty-hunter", "luna", "storm-spirit", "chaos-knight", "ogre-magi", "silencer", "wraith-king", "centaur-warrunner", "tidehunter", "clinkz", "night-stalker", "vengeful-spirit", "disruptor", "mirana", "beastmaster", "gyrocopter", "venomancer", "spectre", "queen-of-pain", "enigma", "terrorblade", "axe", "troll-warlord", "brewmaster", "phoenix", "leshrac", "pugna", "dragon-knight", "huskar", "crystal-maiden", "death-prophet", "visage", "morphling", "magnus", "shadow-fiend", "sven", "nyx-assassin", "puck", "spirit-breaker", "zeus", "witch-doctor", "bane", "templar-assassin", "treant-protector", "clockwerk", "elder-titan", "earth-spirit", "naga-siren", "bristleback", "bloodseeker", "faceless-void", "tusk", "ursa", "doom", "viper", "jakiro", "phantom-assassin", "lycan", "alchemist", "lion", "windranger", "timbersaw", "natures-prophet", "ember-spirit", "tiny", "chen", "weaver", "kunkka", "tinker", "medusa", "dazzle", "dark-seer", "enchantress", "earthshaker", "drow-ranger", "invoker", "omniknight", "oracle", "lina", "rubick", "lone-druid", "necrophos", "phantom-lancer", "sand-king", "warlock", "lich", "slark", "io", "razor", "meepo", "sniper", "riki", "keeper-of-the-light", "ancient-apparition", "broodmother", "techies", "outworld-devourer", "shadow-demon", "anti-mage", "undying"};
	for (int i = 0; i <= 108; i++){
		char c= '"'; 
		char d = 92;
		string s;
		s += "start curl -o html/" + names[i] + ".txt www.dotabuff.com/heroes/" + names[i] + "/matchups" ;
		system(s.c_str());
		if (i % 3 == 0){
			delay(10);
			//system("pause");
		}
	}
}


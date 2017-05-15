#include <cstdio>
#include <cstring>
#include <string>
#include <fstream>
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

#define X first
#define Y second
#define pb push_back
#define mp make_pair

vector <pair <double, string> > v;

string enemies[10];int e = 0;
string allies[10]; int a = 0;
	
void get_input(){
	ifstream in ("input.txt");
	string s;
	if (in >> s == "allies"){
		while (in >> s && s != "enemies"){
			allies[a++] = s;
		}
		while (in >> s){
			enemies[e++] = s;
		}
	}else
	if (s == "enemies"){
		while (in >> s && s != "allies"){
			enemies[e++] = s;
		}
		while (in >> s){
			allies[a++] = s;
		}
	} 
	in.close(); return;
}

void little(){
	ifstream in ("heronamesnotxt.txt");
	string s;
	while (in >> s){
		v.pb(mp (0.0, s));
	}
	in.close();
}

int main(){
	little();
	get_input();
	ofstream on ("result.txt");
	for (int i = 0; i < e; i++){
		string p = "Data/" + enemies[i] + ".txt";
		ifstream in (p.c_str());
		double adv;
		string hero;
		while (in >> hero){
			in >> adv;
			adv = adv * (-1);
			for (int j = 0; j < 108; j++){
				if (v[j].Y == hero){
					v[j].X += adv;
					break;
				}
			}	
		}
		in.close();
	}
	sort (v.begin(), v.end());
	for (int i = 107; i >= 0; i--){
		on << v[i].Y << "              " << v[i].X << "%" << endl;
	}
	/*
	printf ("a = %d e = %d\n",a, e);
	for (int i = 0; i < e; i++){
		cout << enemies[i] << endl;
	}
	*/
	
}

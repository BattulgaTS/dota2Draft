#include <cstdio>
#include <cstdlib>
#include <string>
#include <cstring>
#include <iostream>
#include <vector>
#include <algorithm>
#include <fstream>
using namespace std;

void proc(string a1){
	string names[210], adv[210], s;
	int num = 0;
	string a = "html/"; a += a1;
	string b = "Data/"; b += a1;
	
	ifstream in;
	in.open(a.c_str());
	ofstream on;
	on.open(b.c_str());
	bool ok = false;
	while (in >> s){
		if (num == 109) break;
		if (s == "establishing") ok = true;
		if (ok){
			int n = s.size();
			if (n > 5 &&
				s[0] == 'a' &&
				s[1] == 'l' &&
				s[2] == 't' &&
				s[3] == '=' &&
				s[4] == '"'
			){
				num++;
				int i = 5;
				while (i < n && s[i] != 34){
					names[num] += s[i++];
				}
				if (s[n-1] != 34){
					in >> s; n = s.size();
					if (s == "of"){
						names[num] += "-of";
						in >> s; n = s.size();
					}
					if (s == "the"){
						names[num] += "-the";
						in >> s; n = s.size();
					}
					i = 0; names[num] += "-";
					while (i < n && s[i] != 34){
						names[num] += s[i++];
					}
				}
			}
			if (n > 4 &&
				s[n-1] == 'v' &&
				s[n-2] == 'i' &&
				s[n-3] == 'd' &&
				s[n-4] == '<' &&
				s[n-5] == '%'
			){
				int i = n - 6;
				while (i >= 0 && s[i] != '>'){
					i--;
				} i++;
				while (i < n - 5){
					adv[num] += s[i++];
				}
				for (int j = 0; j < names[num].size(); j++){
					if (names[num][j] < 'a' && names[num][j] != '-' && names[num][j] != 96) names[num][j] += 32;
				}
				on << names[num]  << " " << adv[num] << endl;
			}
		}
	}
	in.close(); on.close();
}
string a[110];
void initiate(){
	FILE * pFile;
	pFile = fopen("heronames.txt", "r");
	char y[110];
	int i = 0;
	while (fgets (y , 100, pFile)){
		a[i] = string(y);
		a[i].erase(a[i].size()-1, 1);
		i++;
	}a[107] += "t";
	for (int i = 0; i < 108; i++) cout << a[i] << endl;
	fclose(pFile);
}

int main(){
	initiate();
	
	for (int i = 0; i < 109; i++){
		proc(a[i]);
	}
}

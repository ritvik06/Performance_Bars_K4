#include "stdc++.h"
#include <string>

using namespace std;

int main(){
    
    fstream myfile;
    string word;
    float lookup=0;
    float connect=3;
    string filename = "log.txt";

    myfile.open(filename.c_str());

    while(myfile >> word){
        if(!word.compare("time_namelookup:")){
            myfile >> word;
            lookup = stof(word);           
        }
        if(!word.compare("time_connect:")){
            myfile >> word;
            connect = stof(word);
            break;           
        }

    }

    if(connect-lookup!=0) cout << "RTT : " << (connect-lookup)*1000 << " ms" << endl;
    else cout << "RTT : 3000 ms" << endl;
   
    return 0;
}

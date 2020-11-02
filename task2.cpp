#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin>>n;
    while(n--){
        int l;
        int r;
        cin>>l>>r;
        int ans = l;
        for(int i=l+1;i<=r;i++){
            ans = ans^i;
        }
        if(ans%2==0)cout<<"Even\n";
        else cout<<"Odd\n";
    }
    return 0;
}
/*
class Solution {
public:
    bool isHappy(int n) {
        set<int> haveNum;
        int tmp=0;
        
        while(n!=1&&n!=4){
            tmp=0;
            while(n){
                tmp+=(n%10)*(n%10);
                n/=10;
            }
            n=tmp;
            if(haveNum.count(n)){
                break;
            }
            else{
                haveNum.insert(n);
            }
        }
        return n==1;
    }
};
*/
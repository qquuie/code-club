class Solution {
public:
    int climbStairs(int n) {
        if(n==1||n==2){
            return n;
        }
        int t1=1,t2=2,tmp=0;
        for(int i=0;i<n-2;i++){
            tmp=t2;
            t2=t1+t2;
            t1=tmp;
        }
        return t2;
    }
};
class Solution {
public:
    int maxArea(vector<int>& height) {
        int Left = 0;
        int Right = height.size() - 1;
        int Max = 0;
        int Ans = 0;
        for(int i = 0; i < height.size();i++){
            if(height[Left]>height[Right]){
                Ans = height[Right]*(Right-Left);
                Right--;
            }
            else{
                 Ans = height[Left]*(Right-Left);
                 Left++;
            }
            if(Ans>Max)Max = Ans;
        }
        return Max;
    }
};

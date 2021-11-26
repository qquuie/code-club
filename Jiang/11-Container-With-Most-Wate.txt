class Solution {
public:
    int maxArea(vector<int>& height) {
        int max_num = 0;
        int begin = 0;
        int end = height.size()-1;
        int tmp_b=0,tmp_e=0;

        
        while (begin < end) {
            int tmp = 0;
            if (height[begin] > height[end]) {
                if(tmp_e<height[end]){
                    tmp = height[end] * (end - begin);
                    if (tmp > max_num) 
                        max_num = tmp;
                }
                --end;              
            }
            else if (height[begin] < height[end]) {
                if(tmp_b<height[begin]){
                    tmp = height[begin] * (end - begin);
                    if (tmp > max_num) 
                        max_num = tmp;
                }
                ++begin;
            }
            else if (height[begin] == height[end]) {
                if(tmp_e<height[end]){
                    tmp = height[end] * (end - begin);
                    if (tmp > max_num) 
                        max_num = tmp;
                }
                --end;
                ++begin;
            }            
        }
        return max_num;
    }
};
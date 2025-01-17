/*
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int,int> num_position;
        map<int,int>::iterator iter;
        vector<int> ans;
        for (int i=0; i<nums.size();i++){
            iter = num_position.find(target-nums[i]);
            if (iter != num_position.end()){ 
                ans.push_back(iter->second); 
                ans.push_back(i);    
                return ans;     
            }
            else{ 
                num_position.insert({nums[i],i});    
            }
        }
        return ans;
    }
};
*/
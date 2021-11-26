class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string ans;
        int min=200;
        bool pass=false;
        if(strs.size() < 1) 
            return "";
        else if(strs.size() == 1){
            return strs[0];
        }
        else{
            for(int i=0;i<strs.size();i++){
                if(min>strs[i].length()){
                       min=strs[i].length();
                }
            }//求最少長度
            for(int i=0; i<min; i++)//長度
            {
                for(int j=0;j<strs.size()-1;j++){//個數
                    if(strs[j][i]==strs[j+1][i]&&j==strs.size()-2){
                        pass=true;
                    }
                    if(strs[j][i]!=strs[j+1][i]){
                        break;
                    }
                }
                if(pass){
                    ans.push_back(strs[0][i]);
                    pass=false;
                }
                else{
                    break;
                }
            }
            return ans;
        }
    };
};
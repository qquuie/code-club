class Solution {
public:
    bool isValid(string s) {
        stack<char> stacking;
        char top;
        if(s.length()<2)return false;
        for(int i=0;i<s.length();i++){
            if(s[i]== '(' || s[i] == '[' || s[i] == '{'){
                stacking.push(s[i]);
            }
            else{
                if(stacking.empty()) return false;
                top = stacking.top();
                stacking.pop();
                if( top == '{' && s[i]!='}')return false;
                if( top == '[' && s[i]!=']')return false;
                if( top == '(' && s[i]!=')')return false;
            }
        }
        return stacking.empty();
    }
};



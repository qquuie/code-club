class Solution {
public:
    bool isValid(string s) {
        stack<char>c;
        for(int i=0;i<s.length();i++){
            switch(s[i]){
                case '(':{
                    c.push('(');
                    break;
                }
                case '[':{
                    c.push('[');
                    break;
                }
                case '{':{
                    c.push('{');
                    break;
                }
                case ')':{
                    if(c.size()==0||c.top()!='(')
                        return false;
                    c.pop();
                    break;
                }
                case ']':{
                    if(c.size()==0||c.top()!='[')
                        return false;
                    c.pop();
                    break;
                }
                case '}':{
                    if(c.size()==0||c.top()!='{')
                        return false;
                    c.pop();
                    break;
                }
            }
        }
        if(c.size()!=0)
            return false;
        return true;
    }
}; 
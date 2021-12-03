/*
class Solution {
public:
	vector<string> generateParenthesis(int n) {
		vector<string> res;
		generate(0, 0, n, "", res);
		return res;
	}

	void generate(int open, int close, const int maxLen, string arr, vector<string>& res) {
		if (arr.size() == 2 * maxLen)
			res.push_back(arr);
		else {
			if (open < maxLen)
				generate(open + 1, close, maxLen, arr + "(", res);
			if (close < open)
				generate(open, close + 1, maxLen, arr + ")", res);
		}
	}
};
*/


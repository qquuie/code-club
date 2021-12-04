#include <iostream>
#include<vector>
using namespace std;
int main()
{
	class Solution {
	public:
		int climbStairs(int n) {
			vector<int>ans(n + 1, 0);
			ans[0] = 1; ans[1] = 1;
			for (int i = 2; i < n; i++)
					ans[n] = ans[n - 1] + ans[n - 2];
				return ans[n];
		}
	};
}
#include <iostream>
#include<unordered_map>
using namespace std;
int main()
{
	class Solution {
	public:
		bool isHappy(int n) {
			unordered_map<int, int> tmp;//不論整數數字為何，加總到最後一定會等於數字1~9的其中一個迴圈，故用u_map來判斷是否有cycle

			while (n != 1) //1和7都是true
			{
				if (n == 7)break;

				else if (tmp[n] == 0)//存入當前sum數值判斷是否有重複數值
					tmp[n]++;
				else //數值重複，表示false
					return false;

				int sum = 0;
				while (n != 0)
				{
					sum += pow(n % 10, 2);
					n = n / 10;
				}

				n = sum;
			}

			return true;
		}
	};
}

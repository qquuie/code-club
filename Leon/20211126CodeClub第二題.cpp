﻿#include <iostream>

int main()
{
	class Solution {
	public:
		int maxArea(vector<int>& height) {
			int left = 0, right = height.size() - 1, WaterArea = 0;
			while (left < right) {
				WaterArea = max(WaterArea, min(height[left], height[right])*(right - left));
				if (height[left] < height[right])left++;
				else right--;
			}
			return WaterArea;
		}

	};
}


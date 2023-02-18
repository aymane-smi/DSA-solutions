class Solution {
public:
    int singleNumber(vector<int>& nums) {
        map<int, int> map;
        for(int i=0;i<nums.size();i++){
            if(map.find(nums.at(i)) != map.end())
                map[nums[i]] = map.at(nums[i]) + 1;
            else
                map[nums[i]] = 1;
        }
        int result;
        for(int i=0;i<nums.size();i++){
            if(map.at(nums[i]) == 1)
                result = nums[i];
        }
        return result;
    }
};
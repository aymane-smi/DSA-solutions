class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        unordered_map<int, int> hashmap;
        for (int i = 0; i < nums.size(); i++)
        {
            int numToFind = target - nums[i];
            if (hashmap.count(numToFind))
                return {hashmap[numToFind], i};
            else
                hashmap[nums[i]] = i;
        }
        return {};
    }
};
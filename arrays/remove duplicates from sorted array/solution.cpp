class Solution
{
public:
    int removeDuplicates(vector<int> &nums)
    {
        int pointer = 0, tmp = nums[0];
        for (int i = 1; i < nums.size(); i++)
            if (tmp != nums[i])
            {
                tmp = nums[i];
                nums[++pointer] = tmp;
            }
        return pointer + 1;
    }
};
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> hashmap = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int numToFind = target - nums[i];
            if (hashmap.containsKey(numToFind))
                return new int[] { hashmap.get(numToFind), i };
            else
                hashmap.put(nums[i], i);
        }
        return new int[] {};
    }
}
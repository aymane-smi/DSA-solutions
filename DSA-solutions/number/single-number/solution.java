class Solution {
    public int singleNumber(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i=0;i<nums.length;i++)
            if(!map.containsKey(nums[i]))
                map.put(nums[i], 1);
            else
                map.replace(nums[i], map.get(nums[i])+1);
        int result = 0;
        for(Map.Entry<Integer, Integer> tmp : map.entrySet())
            if(tmp.getValue() == 1)
                result = tmp.getKey();
        return result;
    }   
}
class Solution {
    public int removeDuplicates(int[] nums) {
        int pointer=0;
        int tmp=nums[0];
        for(int i=1;i<nums.length;i++)
            if(tmp != nums[i]){
                tmp = nums[i];
                nums[++pointer] = tmp;
            }
        return pointer+1;
    }
}
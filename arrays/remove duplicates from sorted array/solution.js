/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let pointer=0;
    let tmp=nums[0];
    for(let i=1;i<nums.length;i++)
        if(tmp !== nums[i]){
            tmp = nums[i];
            nums[++pointer] = tmp;
        }
    return pointer+1;
};
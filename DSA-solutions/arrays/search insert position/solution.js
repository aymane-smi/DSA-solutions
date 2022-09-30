/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if(nums[0] > target)
        return 0;
    function suggested(){
        let tmp;
        for(let i=0;i<nums.length;i++)
            if(nums[i]<=target)
                tmp = i;
        return tmp+1;
    };
    return nums.indexOf(target) !== -1 ? nums.indexOf(target) : suggested();  
};
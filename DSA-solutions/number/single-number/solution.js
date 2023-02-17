/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();

    for(let i=0;i<nums.length;i++)
        if(map.has(nums[i]))
            map.set(nums[i], map.get(nums[i]) + 1);
        else
            map.set(nums[i], 1);
    let result;

    map.forEach((_,k)=>{
        if(map.get(k) === 1)
            result = k;
    });

    return result;
};
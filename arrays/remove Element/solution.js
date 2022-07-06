/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    
    let key = true;
    
    while(key){
        let val_first_index = nums.findIndex(i => i === val);
        if(val_first_index === -1)
            key = false;
        else
            nums.splice(val_first_index, 1);
    }
    return nums.length;
    
};
function searchInsert(nums: number[], target: number): number {
    if(nums[0] > target)
        return 0;
    function suggested():number{
        let tmp: number ;
        for(let i:number=0;i<nums.length;i++)
            if(nums[i]<=target)
                tmp = i;
        return tmp+1;
    };
    return nums.indexOf(target) !== -1 ? nums.indexOf(target) : suggested()
};
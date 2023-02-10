function sortColors2(nums: number[]): void {
    let temp : number;
        for(let j = 1 ; j < nums.length ; j++){
            for(let i = 0 ; i < nums.length ; i++){
                if(nums[j] < nums[i]){
                    temp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = temp;
                }
            }
        }
};
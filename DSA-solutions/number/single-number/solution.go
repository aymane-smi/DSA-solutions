func singleNumber(nums []int) int {
    Map := make(map[int]int);
    for i := 0; i<len(nums) ; i++{
        if _ , exist := Map[nums[i]]; exist{
            Map[nums[i]] = Map[nums[i]]+1;
        }else{
            Map[nums[i]] = 1;
        }
    }
    var result int;
    for i := 0; i<len(nums); i++{
        if value := Map[nums[i]]; value == 1{
            result = nums[i];
        }
    }

    return result;
}s
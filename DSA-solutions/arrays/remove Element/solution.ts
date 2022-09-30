function removeElement(nums: number[], val: number): number {
    let key:boolean = true;
    while(key){
        let val_first_index:number = nums.findIndex( (i:number) => i === val);
        if(val_first_index === -1)
            key = false;
        else
            nums.splice(val_first_index, 1);
    }
    return nums.length;
};
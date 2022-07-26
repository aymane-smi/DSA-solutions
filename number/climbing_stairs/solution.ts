function climbStairs(n: number): number {
    let one: number = 1;
    let two:number = 1;
    let tmp: number = 0;
    for(let i:number = 0;i<n-1;i++){
        tmp = one;
        one += two;
        two = tmp;
    }
    return one;
};
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let one = 1;
    let two = 1;
    let tmp;
    for(let i=0;i<n-1;i++){
        tmp = one;
        one += two;
        two = tmp;
    }
    return one;
};
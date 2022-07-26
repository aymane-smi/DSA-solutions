/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let right = x;
    let left = 1;
    if(x < 2)
        return x;
    while(left < right){
        let mid = left + Math.floor(( right - left ) /2);
        if(mid * mid > x)
            right = mid;
        else if(mid * mid === x)
            return mid;
        else
            left = mid + 1;
    }
    
    return left - 1;
};
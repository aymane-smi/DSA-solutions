/**
 * @param {number} x
 * @return {boolean}
 */

//first approach
var isPalindrome = function(x) {
    if(x<0)
        return false;
    let str_arr = x.toString().split('');
    for(let i=0, j=str_arr.length-1;i<=j;i++,j--){
        if(str_arr[i] !== str_arr[j])
            return false;
    }
    return true;
};

//Second approach

var isPalindrome2 = function(x){
    if(x<0)
        return false;
    let str_arr = x.toString().split('');
    if(str_arr.join('') !== str_arr.reverse().join(''))
        return false;
    return true;
};
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let tmp;
    let carry = 1;
    let len = digits.length - 1;
    while( len >= 0 && carry){
        tmp = digits[len] + carry;
        digits[len] = tmp % 10;
        carry = Math.floor(tmp / 10);
        len--;
    }
    if(carry)
        digits.unshift(1);
    return digits;
};
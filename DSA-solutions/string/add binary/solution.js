/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let carry = 0;
    let i = a.length -1;
    let j = b.length -1;
    let result = "";
    let tmp = 0;
    
    while( i>=0 && j>=0){
        tmp = Number(+a[i--] + +b[j--]*1 + carry);
        carry = Math.floor(tmp/2);
        result = tmp%2 + result;
    }
    
    while(i >=0){
        tmp = Number(+a[i--] + carry);
        carry = Math.floor(tmp/2);
        result = tmp%2 + result;
    }
    
    while(j >=0){
        tmp = Number(+b[j--] + carry);
        carry = Math.floor( tmp /2);
        result = tmp%2 + result;
    }
    
    if(carry)
        result = 1 + result;
    
    return result;
};
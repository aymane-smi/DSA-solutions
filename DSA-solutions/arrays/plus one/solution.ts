function plusOne(digits: number[]): number[] {
    let carry: number = 1;
    let tmp:number = 0;
    let len:number = digits.length - 1;
    while(len >= 0 && carry){
        tmp = digits[len] + carry;
        carry = Math.floor(tmp / 10);
        digits[len] = tmp % 10;
        len--;
    }
    
    if(carry) digits.unshift(1);
    return digits;
};
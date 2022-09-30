function mySqrt(x: number): number {
    let left:number = 1;
    let right:number = x;
    if(x < 2)
        return x;
    while(left < right){
        let mid:number = left + Math.floor( ( right - left ) / 2);
        if(mid * mid > x){
            right = mid;
        }else if( mid * mid === x){
            return mid;
        }else{
            left = mid + 1;
        }
    }
    return left - 1;
};
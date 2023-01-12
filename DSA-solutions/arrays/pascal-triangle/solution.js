/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1]];
    if(numRows >= 2)
        result.push([1,1]);
    for(let i=3;i<=numRows;i++){
        let tmp = new Array(i);
        for(let j=0;j<i;j++)
            if(j === 0 || j === i-1)
                tmp[j] = 1;
            else
                tmp[j] = result[i-2][j-1] + result[i-2][j];
        result.push(tmp);
    }
    return result;
};
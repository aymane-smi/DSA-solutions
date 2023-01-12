func generate(numRows int) [][]int {
    result := [][]int{{1}};
    if numRows >=2 {
        result = append(result, []int{1,1});
    }

    for i:= 3; i<=numRows ;i++{
        var tmp []int
        for j:=0;j<i;j++{
            if j==0 || j == i-1{
                tmp = append(tmp, 1)
            }else{
                tmp = append(tmp, result[i-2][j-1] + result[i-2][j])
            }
        }
        result = append(result, tmp)
    } 

    return result
}
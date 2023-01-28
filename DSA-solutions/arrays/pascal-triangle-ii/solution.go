func getRow(rowIndex int) []int {

    var result []int

    result = append(result, 1);

    for i := 1 ; i <= rowIndex ; i++ {
        tmp := int((int64(result[i-1]*(rowIndex-i+1)/i)))
        result = append(result, tmp)
    }
    return result
}
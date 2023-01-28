class Solution {

    /**
     * @param Integer $rowIndex
     * @return Integer[]
     */
    function getRow($rowIndex) {
        $result = [1];
        for($i=1;$i<=$rowIndex;$i++)
            array_push($result, $result[$i-1]*($rowIndex-$i+1)/$i);
        return $result;
    }
}
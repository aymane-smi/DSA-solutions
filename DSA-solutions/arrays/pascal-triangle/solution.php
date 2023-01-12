class Solution {

/**
 * @param Integer $numRows
 * @return Integer[][]
 */
function generate($numRows) {
    $result = array(
        array(1)
    );

    if($numRows >= 2)
        array_push($result, array(1, 1));

    for($i=3;$i<=$numRows;$i++){
        $tmp = [];
        for($j=0;$j<$i;$j++){
            if($j === 0 || $j === $i-1)
                array_push($tmp, 1);
            else
                array_push($tmp, $result[$i-2][$j-1] + $result[$i-2][$j]);
        }
        array_push($result, $tmp);
    }
    return $result;
}
}
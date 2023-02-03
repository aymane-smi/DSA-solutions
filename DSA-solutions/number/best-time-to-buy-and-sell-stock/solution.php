class Solution {

/**
 * @param Integer[] $prices
 * @return Integer
 */
function maxProfit($prices) {
    $r = 1;
    $l = 0;
    $maxP = 0;

    while($r < count($prices)){
        $profit = $prices[$r] - $prices[$l];
        if($profit > 0)
            $maxP = max($profit, $maxP);
        else
            $l = $r;
        $r++;
    }
    return $maxP;
}
}
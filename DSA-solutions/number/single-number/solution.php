class Solution {

/**
* @param Integer[] $nums
* @return Integer
*/
function singleNumber($nums) {
$map = [];
for($i=0;$i<count($nums);$i++) if(array_key_exists($nums[$i], $map)) $map[$nums[$i]] +=1; else $map[$nums[$i]]=1; $result; for($i=0;$i<count($nums);$i++) if($map[$nums[$i]]===1) $result=$nums[$i]; return $result; } }
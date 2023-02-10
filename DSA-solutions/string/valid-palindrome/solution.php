<?php
class Solution {

    function isNonAlphaNum($c){
        $str = "!@#&()–[{}]:;',.?/*`~$^+=<>“-_\" ";
        return str_contains($str, $c);
    }
    /**
     * @param String $s
     * @return Boolean
     */
    function isPalindrome($s) {
        $newString = "";
        for($i = 0;$i<strlen($s);$i++)
            if(!$this->isNonAlphaNum($s[$i]))
                $newString .= $s[$i];
        $newstring = strtolower($newString);
        for($i=0, $j=strlen($s)-1;$i<$j; $i++, $j--)
            if($newString[$i] !== $newString[$j])
                return false;
        return true;
    }
    }
?>
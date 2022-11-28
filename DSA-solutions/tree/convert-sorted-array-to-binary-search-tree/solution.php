/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {

    /**
     * @param Integer[] $nums
     * @return TreeNode
     */
    function test($nums, $start, $end){
        if($start > $end)
            return null;
        $mid = intval(($start + $end)/2);
        $tree = new TreeNode($nums[$mid]);
        $tree->left = $this->test($nums, $start, $mid-1);
        $tree->right = $this->test($nums, $mid+1, $end);
        return $tree;
    }
    
    function sortedArrayToBST($nums) {
        return $this->test($nums, 0, count($nums) - 1);
    }
    
}
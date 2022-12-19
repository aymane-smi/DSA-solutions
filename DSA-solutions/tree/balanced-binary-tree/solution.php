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


    function height($root){
        return $root == null ? 0 : max($this->height($root->left), $this->height($root->right))+1;
    }
    /**
     * @param TreeNode $root
     * @return Boolean
     */
    function isBalanced($root) {
        if($root == null)
            return true;
        $lh = $this->height($root->left);
        $rh = $this->height($root->right);
        if(abs($lh - $rh) <= 1 && $this->isBalanced($root->right) && $this->isBalanced($root->left))
            return true;
        return false;
    }
}
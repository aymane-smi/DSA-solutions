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
     * @param TreeNode $root
     * @return Integer
     */
    function minDepth($root) {
        $l = PHP_INT_MAX;
        $r = PHP_INT_MAX;

        if(!$root)
            return 0;
        if(!$root->left && !$root->right)
            return 1;
        
        if($root->left)
            $l = $this->minDepth($root->left);
        if($root->right)
            $r = $this->minDepth($root->right);

        return 1+max($l, $r);
    }
}
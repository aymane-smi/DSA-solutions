/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if(root == null)
            return true;
        return isMirror(root.left, root.right);
    }
    
    public boolean isMirror(TreeNode L, TreeNode R){
        if(L == null && R == null)
            return true;
        if(L == null || R == null)
            return false;
        boolean test = (L.val == R.val) && isMirror(L.left, R.right);
        return test && isMirror(L.right, R.left);
    }
}
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
    public int minDepth(TreeNode root) {
        int l = Integer.MAX_VALUE, r = Integer.MAX_VALUE;

        if(root == null)
            return 0;
        if(root.left == null && root.right == null)
            return 1;
        if(root.left != null)
             l = minDepth(root.left);
        if(root.right != null)
            r = minDepth(root.right);
        
        return 1+Math.min(l, r);
    }
}
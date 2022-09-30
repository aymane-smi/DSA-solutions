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
    private List<Integer> result = new ArrayList<>();
    public void fn(TreeNode root){
        if(root == null)
            return;
        fn(root.left);
        result.add(root.val);
        fn(root.right);
    }
    public List<Integer> inorderTraversal(TreeNode root) {
        fn(root);
        return result;
    }
}
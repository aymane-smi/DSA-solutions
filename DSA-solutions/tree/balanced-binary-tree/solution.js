/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var height = (root)=>{
    return root === null ? 0 : Math.max(height(root.left), height(root.right))+1;
}
var isBalanced = function(root) {
   if(root === null)
       return true;
   let lh = height(root.left);
   let rh = height(root.right);
   if(Math.abs(lh - rh) <= 1 && isBalanced(root.left) && isBalanced(root.right))
       return true;
   return false;
};
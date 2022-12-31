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
 * @return {number}
 */
var minDepth = function(root) {
    let l = Number.MAX_VALUE;
    let r = Number.MAX_VALUE;
    if(root === null)
        return 0;
    if(root.left === null && root.right === null)
        return 1;
    
    if(root.left !== null)
        l = minDepth(root.left);
    if(root.right != null)
        r = minDepth(root.right);
    return 1 + Math.min(l, r);
};
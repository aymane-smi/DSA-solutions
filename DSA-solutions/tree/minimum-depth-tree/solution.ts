/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDepth(root: TreeNode | null): number {
    let l = Number.MAX_VALUE;
    let r = Number.MAX_VALUE;
    if(root === null)
        return 0;
    if(root.left === null && root.right === null)
        return 1;
    if(root.left !== null)
        l = minDepth(root.left);
    if(root.right !== null)
        r = minDepth(root.right);

    return 1+Math.min(l, r);
};
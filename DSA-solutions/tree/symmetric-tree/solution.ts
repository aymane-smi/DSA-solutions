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

function isSymmetric(root: TreeNode | null): boolean {
    if(root === null)
        return true;
    return isMirror(root.left, root.right);
};

function isMirror(L: TreeNode|null, R: TreeNode|null): boolean{
    if(L === null && R === null)
        return true;
    if(L === null || R === null)
        return false;
    console.log(L.val, R.val);
    return (L.val === R.val) && isMirror(L.left, R.right) && isMirror(L.right, R.left);
}
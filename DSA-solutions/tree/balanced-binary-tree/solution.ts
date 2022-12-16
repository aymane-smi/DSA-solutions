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

function height(root){
    return root === null ? 0 : Math.max(height(root.left), height(root.right))+1;
}

function isBalanced(root: TreeNode | null): boolean {
    if(root === null)
        return true;
    let lh:number;
    let rh:number;

    lh = height(root.left);
    rh = height(root.right);
    console.log(lh, rh);
    if(Math.abs(lh-rh) <= 1 && isBalanced(root.left) && isBalanced(root.right))
        return true;
    return false;
};
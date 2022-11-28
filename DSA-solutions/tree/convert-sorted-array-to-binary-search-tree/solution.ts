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

 function test(nums: number[], start:number, end:number){
    if(start > end)
        return null;
    let mid:number = Math.floor((start+end)/2);
    let tree = new TreeNode(nums[mid]);
    tree.left = test(nums, start, mid-1);
    tree.right = test(nums, mid+1, end);
    return tree;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return test(nums, 0, nums.length - 1);

};
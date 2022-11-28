/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

 const test = (nums, start, end)=>{
    if(start > end)
        return null;
    let mid = parseInt((start+end)/2);
    let tree = new TreeNode(nums[mid]);
    tree.left = test(nums, start, mid-1);
    tree.right = test(nums, mid+1, end);
    return tree;
};

var sortedArrayToBST = function(nums) {
    return test(nums, 0, nums.length - 1);
};
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func sortedArrayToBST(nums []int) *TreeNode {
    return test(nums, 0, len(nums) - 1)
}

func test(nums []int, start int, end int) *TreeNode{
    if start > end{
        return nil
    }
    var mid int = (start + end)/2
    var tree TreeNode;
    tree.Val = nums[mid];
    tree.Left = test(nums, start, mid-1)
    tree.Right = test(nums, mid+1, end)
    return &tree;
    
}

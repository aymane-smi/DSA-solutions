/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

//if you want to use min from math you should work with float64
func minDepth(root *TreeNode) int {
	l, r := math.MaxInt32, math.MaxInt32

	if root == nil {
		return 0
	}
	if root.Left == nil && root.Right == nil {
		return 1
	}

	if root.Left != nil {
		l = minDepth(root.Left)
	}
	if root.Right != nil {
		r = minDepth(root.Right)
	}

	if l >= r {
		return 1 + r
	} else {
		return 1 + l
	}
}   
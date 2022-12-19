/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func height(root *TreeNode) float64{
    if root == nil{
        return 0
    }
    return math.Max(height(root.Left), height(root.Right))+1
}

func isBalanced(root *TreeNode) bool {
    if root == nil{
        return true
    }

    var lh, rh float64 = height(root.Left), height(root.Right)
    
    if int(math.Abs(lh - rh)) <= 1 && isBalanced(root.Left) && isBalanced(root.Right){
        return true
    }
    return false
}
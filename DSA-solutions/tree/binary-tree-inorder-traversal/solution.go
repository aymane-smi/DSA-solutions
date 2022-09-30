/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func inorderTraversal(root *TreeNode) []int {
    result := []int{}
    var fn func(*TreeNode)
    fn =func(root *TreeNode){
        if root  == nil{
            return
        }
        fn(root.Left)
        result = append(result, root.Val)
        fn(root.Right)
    }
    fn(root)
    return result
}
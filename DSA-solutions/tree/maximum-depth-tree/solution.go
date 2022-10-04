/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func maxDepth(root *TreeNode) int {
    if root == nil{
        return 0;
    }
    
    L := maxDepth(root.Left);
    R := maxDepth(root.Right);
    
    if L > R{
        return 1+L;
    }else{
        return 1+R;
    }
}
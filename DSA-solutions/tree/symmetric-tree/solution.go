/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func isSymmetric(root *TreeNode) bool {
    if root == nil{
        return true;
    }
    return isMirror(root.Left, root.Right);
}

func isMirror(L* TreeNode, R* TreeNode) bool {
    if L == nil && R == nil {
        return true;
    }
    if L == nil || R == nil{
        return false;
    }
    return L.Val == R.Val && isMirror(L.Left, R.Right) && isMirror(L.Right, R.Left);
}
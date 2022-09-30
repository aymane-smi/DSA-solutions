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

 function inorderTraversal(root: TreeNode | null): number[] {
    let result:number[] = [];
    
    const fn = (root)=>{
        if(!root) return;
        fn(root.left);
        result.push(root.val);
        fn(root.right);
    };
    
    fn(root);
    
    return result;
};
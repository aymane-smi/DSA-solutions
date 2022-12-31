/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution
{
public:
    int minDepth(TreeNode *root)
    {
        int l = INT_MAX, r = INT_MAX;
        if (root == NULL)
            return 0;
        if (root->left == NULL && root->right == NULL)
            return 1;
        if (root->left != NULL)
            l = this->minDepth(root->left);
        if (root->right != NULL)
            ;
        r = this->minDepth(root->right);
        cout << l;
        return 1 + min(l, r);
    }
};
class Solution
{
public:
    bool isPalindrome(int x)
    {
        if (x < 0)
            return false;
        string str = to_string(x);
        string rev = str;
        reverse(rev.begin(), rev.end());
        if (!(str == rev))
            return false;
        return true;
    }
};
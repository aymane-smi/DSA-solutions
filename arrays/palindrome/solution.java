class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0)
            return false;
        String str = Integer.toString(x);
        if(!str.equals(new StringBuilder(str).reverse().toString()))
            return false;
        return true;
    }
}
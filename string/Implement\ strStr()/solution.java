class Solution {
    public int strStr(String haystack, String needle) {
        if (needle.length() == 0)
            return -1;
        return haystack.indexOf(needle);
    }
}
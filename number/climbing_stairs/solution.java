class Solution {
    public int climbStairs(int n) {
        int one = 1, two = 1, tmp;
        for(int i=0;i<n-1;i++){
            tmp = one;
            one += two;
            two = tmp;
        }
        return one;
    }
}
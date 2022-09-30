class Solution {
    public int mySqrt(int x) {
        long left = 1, right = x;
        if (x < 2)
            return x;
        while (left < right) {
            // i was stock while using mid as integer
            // so i googled and find this stackoverflow post
            // https://stackoverflow.com/questions/61936060/finding-the-square-root-of-a-number-by-using-binary-search
            long mid = (left + (right - left) / 2);
            if (mid * mid == x)
                return (int) mid;
            else if (mid * mid > x)
                right = mid;
            else
                left = mid + 1;
        }
        System.out.println(left <= right);
        return (int) left - 1;
    }
}
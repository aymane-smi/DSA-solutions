class Solution {
    public int[] plusOne(int[] digits) {
        int tmp;
        int len = digits.length - 1;
        int carry = 1;
        while(len >= 0 && carry == 1){
            tmp = digits[len] + carry;
            carry = (int)(tmp / 10);
            digits[len] = tmp % 10;
            len--;
        }
        if(carry == 1){
            int[] test = new int[digits.length + 1];
            test[0] = 1;
            for(int i = 1; i<digits.length-1;i++)
                test[i+1] = digits[i];
            return test;
        }
        return digits;
    }
}
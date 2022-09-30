class Solution {
    public String addBinary(String a, String b) {
        int tmp, i = a.length() - 1, j = b.length() - 1, carry = 0;
        StringBuilder result = new StringBuilder("");
        while(i >=0 && j>= 0){
            tmp = Character.getNumericValue(a.charAt(i--)) + Character.getNumericValue(b.charAt(j--)) + carry;
            carry = (int)(tmp / 2);
            result.append((tmp %2)+"");
        }
        
        while(i >=0){
            tmp = Character.getNumericValue(a.charAt(i--)) + carry;
            carry = (int)(tmp / 2);
            result.append((tmp %2)+"");
        }
        
        while(j >=0){
            tmp = Character.getNumericValue(b.charAt(j--)) + carry;
            carry = (int)(tmp / 2);
            result.append((tmp %2)+"");
        }
        if(carry == 1)
            result.append(1+"");
        return result.reverse().toString();
    }
}
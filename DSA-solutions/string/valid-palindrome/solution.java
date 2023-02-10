class Solution {
    public boolean isNonAlphaNum(char c){
        String str = "!@#&()–[{}]:;',.?/*`~$^+=<>“-_\" ";
        return str.contains(""+c);
    }
    public boolean isPalindrome(String s) {
        String newString = "";
        for(int i=0;i<s.length();i++)
            if(!this.isNonAlphaNum(s.charAt(i)))
                newString += s.charAt(i);
        newString = newString.toLowerCase();
        for(int i=0,j=newString.length()-1;i<j;i++, j--)
            if(newString.charAt(i) != newString.charAt(j))
                return false;
        return true;
    }
}
class Solution {
public:
    bool isNonAlphaNum(char c){
        string str = "!@#&()–[{}]:;',.?/*`~$^+=<>“-_\" ";
        return str.find(c) != string::npos ? true : false;
    }

    bool isPalindrome(string s) {
        string newString = "";
        for(int i=0;i<s.length();i++)
            if(!this->isNonAlphaNum(s[i]))
                newString += s[i];
        transform(newString.begin(), newString.end(), newString.begin(), ::tolower);
        for(int i=0, j = newString.length() -1 ;i<j; i++, j--)
            if(newString[i] != newString[j])
                return false;
        return true;
    }
};
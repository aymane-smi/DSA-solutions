func isNonAlphaNum(c byte) bool{
    var str string = "!@#&()–[{}]:;',.?/*`~$^+=<>“-_\" "
    return strings.Contains(str, string(c))
}

func isPalindrome(s string) bool {
    var newString string = ""
    for i := 0; i < len(s); i++{
        if !isNonAlphaNum(s[i]){
            newString += string(s[i])
        }
    }

    newString = strings.ToLower(newString)

    for i , j := 0, len(newString)-1; i<j; i, j = i+1, j-1 {
        if newString[i] != newString[j]{
            return false;
        }
    }

    return true;
}
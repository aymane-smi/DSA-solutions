function isNonAlphaNum(c){
    let str = "!@#&()–[{}]:;',.?/*`~$^+=<>“-_\" ";
    return str.includes(c);
}
function isPalindrome(s: string): boolean {
    let newString = "";
    for(let i=0;i<s.length;i++)
        if(!isNonAlphaNum(s[i]))
            newString+=s[i];
    newString = newString.toLowerCase();
    for(let i=0, j=newString.length-1;i<j;i++,j--)
        if(newString[i] !== newString[j])
            return false;
    return true;
};
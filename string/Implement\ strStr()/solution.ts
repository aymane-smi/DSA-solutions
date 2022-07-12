function strStr(haystack: string, needle: string): number {
    if(!needle.length)
        return 0;
    //let spliting: Array<String> = haystack.split(needle);
    //console.log(spliting)
    return haystack.indexOf(needle);
};
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    return s.split(" ").filter((s)=>s !== "").reverse()[0].length;
};
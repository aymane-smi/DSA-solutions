/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let open = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
    
    let stack = [];
    for(let ch of s){
        if(open.has(ch))
            stack.push(open.get(ch));
        else if(stack.length && stack[stack.length - 1] === ch)
            stack.pop();
        else
            return false;
    }
    
    return stack.length === 0
};
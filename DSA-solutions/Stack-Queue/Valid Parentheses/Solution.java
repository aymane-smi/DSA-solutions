class Solution {
    public boolean isValid(String s) {
            Stack <Character> list = new Stack <> ();

            for(char c : s.toCharArray()){
                if(c == '(' || c == '[' || c == '{'){
                    list.push(c);
                }

                else if(c == ')' && !list.empty() && list.peek() == '('){
                    list.pop();
                }

                 else if(c == ']' && !list.empty() && list.peek() == '['){
                    list.pop();
                }

                 else if(c == '}' && !list.empty() && list.peek() == '{'){
                    list.pop();
                }

                else {
                    return false;
                }
            }

            return list.empty();

    }
}
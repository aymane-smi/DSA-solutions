class Solution {
    public boolean isValid(String s) {
        HashMap<Character, Character> open = new HashMap<>();
        ArrayList<Character> stack = new ArrayList<>();
        open.put('(', ')');
        open.put('[', ']');
        open.put('{', '}');
        char[] tmp = s.toCharArray();
        for (int i = 0; i < tmp.length; i++) {
            if (open.containsKey(tmp[i]))
                stack.add(open.get(tmp[i]));
            else if (stack.size() > 0 && stack.get(stack.size() - 1) == tmp[i]) {
                stack.remove(stack.size() - 1);
            } else
                return false;
        }
        return stack.size() == 0;
    }
}
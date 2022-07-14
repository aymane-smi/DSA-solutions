class Solution {
    public int lengthOfLastWord(String s) {
        String[] arr = s.split(" ");
        List<String> filtred = new ArrayList<>();
        for (String tmp : arr)
            if (!tmp.equals(""))
                filtred.add(tmp);
        return filtred.get(filtred.size() - 1).length();
    }
}
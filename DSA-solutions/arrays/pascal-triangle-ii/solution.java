class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> result = new ArrayList<>();
        result.add(1);
        for(int i=1;i<=rowIndex;i++){
            //System.out.println(result.get(i-1)+"//"+rowIndex+"//"+i);
            result.add((int)((long)result.get(i-1)*(rowIndex-i+1)/i));
        }
        return result;
    }
}
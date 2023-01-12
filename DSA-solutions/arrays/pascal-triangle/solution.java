class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> result = new ArrayList<>();
        result.add(List.of(1));
        if(numRows >= 2){
            result.add(Arrays.asList(1,1));
        }
        for(int i=3;i<=numRows;i++){
            List<Integer> tmp = new ArrayList<>();
            for(int j=0;j<i;j++)
                if(j == 0 || j == i-1)
                    tmp.add(1);
                else
                    tmp.add(result.get(i-2).get(j-1)+ result.get(i-2).get(j));
            
            result.add(tmp);
        }
        return result;
    }
}
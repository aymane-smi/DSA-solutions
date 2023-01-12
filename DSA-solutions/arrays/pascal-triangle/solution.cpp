class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> result = {{1}};

        if(numRows >= 2)
            result.push_back({1,1});
        for(int i=3;i<=numRows;i++){
            vector<int> tmp;
            for(int j=0;j<i;j++)
                if(j == 0 || j == i-1)
                    tmp.push_back(1);
                else
                    tmp.push_back(result.at(i-2).at(j-1) + result.at(i-2).at(j));
            result.push_back(tmp);
        }
        return result;
    }
};
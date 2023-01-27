class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> result;
        result.push_back(1);
        for(int i=1;i<=rowIndex;i++)
            result.push_back((int)((long long)result.back()*(rowIndex-i+1)/i));
        return result;
    }
};
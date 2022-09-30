func merge(nums1 []int, m int, nums2 []int, n int)  {
    p1, p2, i := m-1, n-1, n+m-1
    
    for p2 >= 0 {
        if p1 >= 0 && nums1[p1] >= nums2[p2]{
            nums1[i] = nums1[p1]
            i--
            p1--
        }else{
            nums1[i] = nums2[p2]
            i--
            p2--
        }
    }
}
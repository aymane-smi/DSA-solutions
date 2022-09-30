/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func deleteDuplicates(head *ListNode) *ListNode {
    
    i:= head;
    
    while(i != nil)
        if(i != nil && i.Val == i.Next.Val)
            i.Next = i.Next.Next;
        else
            i = i.Next;
    
    return head;
    
}
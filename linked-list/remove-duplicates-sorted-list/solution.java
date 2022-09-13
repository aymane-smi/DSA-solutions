/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        
        ListNode i = head;
        while( i != null){
            if(i != null && i.next != null && i.val == i.next.val)
                i.next = i.next.next;
            else
                i = i.next;
        }
        return head;
        
    }
}
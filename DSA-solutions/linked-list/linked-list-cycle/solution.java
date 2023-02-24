/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode tmp = head;
        Set<ListNode> tracker = new HashSet<>();
        while(tmp != null){
            if(tracker.contains(tmp))
                return true;
            else
                tracker.add(tmp);
            tmp = tmp.next;
        }
        return false;
    }
}
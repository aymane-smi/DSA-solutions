/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    let tmp: ListNode | null = head;
    let tracker = new Set<ListNode | null>();
    while(tmp){
        if(tracker.has(tmp))
            return true;
        else
            tracker.add(tmp);
        tmp = tmp.next;
    }
    return false;
};
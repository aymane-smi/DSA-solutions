/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let tmp = head;
    let tracker = new Set();
    while(tmp){
        if(tracker.has(tmp))
            return true;
        else
            tracker.add(tmp);
        tmp = tmp.next;
    }
    return false;
};
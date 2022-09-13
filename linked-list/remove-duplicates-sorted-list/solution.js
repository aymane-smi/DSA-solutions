/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let i = head;
    while(i)
        if(i && i.val === i.next?.val)
           i.next = i.next.next;
        else
           i = i.next;
    return head;
};
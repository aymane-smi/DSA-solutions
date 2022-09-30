/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    const root = new ListNode();
    let tmp = root;
    while(list1 && list2){
        if(list1.val >= list2.val){
            tmp.next = list2;
            tmp = tmp.next;
            list2 = list2.next;
        }else if(list1.val <= list2.val){
            tmp.next = list1;
            tmp = tmp.next;
            list1 = list1.next;
        }
    }
    
    while(list1){
        tmp.next = list1;
        tmp = tmp.next;
        list1 = list1.next;
    }
    
    while(list2){
        tmp.next = list2;
        tmp = tmp.next;
        list2 = list2.next;
    }
    return root.next;
};
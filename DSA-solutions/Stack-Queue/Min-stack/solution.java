class Solution {

    Stack <Integer> stack;
    Stack <Integer> minstack;

    public MinStack() {
        stack = new Stack <> ();
        minstack = new Stack <> ();
    }

    
    public void push(int val) {
     stack.push(val);
     if(minstack.empty() || val <= minstack.peek()){
         minstack.push(val);
     }
    }
    
    public void pop() {
       int x =  stack.pop();
       if(x == minstack.peek()){
           minstack.pop();
       }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minstack.peek();
    }
}
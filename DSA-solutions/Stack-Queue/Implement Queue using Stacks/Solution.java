class Solution {
    Stack <Integer> FirstStack;
    Stack <Integer> SecondStack; 

    public MyQueue() {
    FirstStack = new Stack <> ();
    SecondStack = new Stack <> ();
    }
    
    public void push(int x) {
        FirstStack.push(x);
    }
    
    public int pop() {
     if(SecondStack.empty()){
            while(!FirstStack.empty()){
            SecondStack.push(FirstStack.pop());
        }

     }
        return SecondStack.pop();
    }
    
    public int peek(){
        if(SecondStack.empty()){
            while(!FirstStack.empty()){
            SecondStack.push(FirstStack.pop());
        }
        }

        return SecondStack.peek();
    }
    
    public boolean empty() {
        return FirstStack.empty() && SecondStack.empty();
    }
}
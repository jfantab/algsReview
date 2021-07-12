class Stack {
    constructor() {
        this.size = 0;
        this.stack = [];
    }

    push(val) {
        this.stack.push(val);
        this.size++
    }

    pop() {
        if(this.size === 0) return

        this.stack.pop();
        this.size--
    }

    isEmpty() {
        return this.size === 0
    }

    print() {
        for(let i = this.size - 1; i >= 0; i--)
            console.log(this.stack[i])
    }

}

let s = new Stack()
s.push(1)
s.push(2)
s.push(3)
s.pop()
s.print()
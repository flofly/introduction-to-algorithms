
function Stack() {
    this.items = [];
    this.enqueue = function(obj) {
        this.items.push(obj);
    };
    this.dequeue = function() {
        return this.items.pop();
    };
    this.isEmpty = function() {
        return this.items.length == 0;
    }
}
function QueueWithTwoStacks() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.enqueue = function(obj) {
        this.stack1.enqueue(obj);
    };
    this.dequeue = function() {

        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.enqueue(this.stack1.dequeue());
            }
        }

        return this.stack2.dequeue();

    };
    this.isEmpty = function() {
        return this.stack1.isEmpty() && this.stack2.isEmpty();
    }
}

var queue = new QueueWithTwoStacks();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

while (!queue.isEmpty()) {
    console.log(queue.dequeue());
}

var stack = new Stack();
stack.enqueue(0);
stack.enqueue(1);
stack.enqueue(2);
stack.enqueue(3);

while (!stack.isEmpty()) {
    console.log(stack.dequeue());
}
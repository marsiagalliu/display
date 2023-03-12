class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SLL {
    // constructor, other methods, removed for brevity
    constructor(){
        this.head=null;
    }

    addFront(value) {
        let newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    display() {
        var currentNode=this.head;
        if(currentNode==null) {
            return " ";
        }
        var runner=this.next;
        while(currentNode){
            console.log(currentNode.data)
            currentNode=currentNode.next;
        }
    }

}
SLL1 = new SLL()
SLL1.addFront(76);
SLL1.addFront(2);
SLL1.addFront(5);

console.log(SLL1.display());

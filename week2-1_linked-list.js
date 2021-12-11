class SLL {
    constructor(){
        this.head = null
    }
    addFront(value){
        let nd = new Node(value)
        if(this.head) {
            nd.next = this.head
        }
        this.head = nd

        return this
    }
    removeFront(){
        if(this.head){
            if(this.head.next) return this.head.next
            else return null
        }
        else return null
    }
    front(){
        if(this.head) return this.head.value
        else return null
    }
}

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

/* test case */
let sll = new SLL
console.log(sll.removeFront())
console.log(sll.addFront(3))
console.log(sll.addFront(2))
console.log(sll.addFront(1))
console.log(sll.front())
console.log(sll.removeFront())

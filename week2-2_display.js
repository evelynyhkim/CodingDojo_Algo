class SLL {
    constructor(){
        this.head = null
    }
    add(value){
        let new_nd = new Node(value)
        if(this.head !== null){
            let nd = this.head
            while(nd.next !== null) {
                nd = nd.next
            }
            nd.next = new_nd
        } else {
            this.head = new_nd
        }
        return this
    }
    display(){
        let node = this.head
        let str = ""
        while(node !== null && node.next !== null){
            str += typeof node.value == "number"? node.value.toString() : node.value
            node = node.next
        }
        str += typeof node.value == "number"? node.value.toString() : node.value
        console.log(str)
    }
}

class Node{
    constructor(val){
        this.value = val
        this.next = null
    }
}

// test case
let sll = new SLL()
sll.add(10).add(20).add("33").add(44)
console.log(sll)
sll.display()

const {LinkedList} = require('./List');

class Stack {
    constructor() {
        this.stack = new LinkedList(); 
    }

    add_item(value) {
        this.stack.add_item(value);
    }
    
    is_empty() {
        //valida los nodos de la lista
        if ( this.stack.head === null) {
            return true 
        }
        return false
    }

    remove_top() {
        let current = this.stack.head;

        if (current != null || current.next != null) {
            this.stack.head = current.next_nodo();
            if (this.stack.head === null) {
                return null
            }
            return this.stack.head.value;
        }

    }

}


module.exports = {
    Stack
}
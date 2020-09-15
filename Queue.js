const {LinkedList} = require('./List');

class Queue {
    constructor() {
        this.queue = new LinkedList(); 
    }

    add_item(value) {
        this.queue.add_item(value);
    }

    is_empty() {
        //valida los nodos de la lista
        if ( this.stack.head === null) {
            return true 
        }
        return false
    }

    remove_final() {
        let current = this.queue.head;
        let prev = null;

        while (current != null) {
            if (current.next === null) {
                prev.next = null;
                console.log('soy el prev dentro de if: ', prev);
            }
            prev = current;
            console.log('soy prev fuera de if: ', prev);
            current = current.next;
            console.log('soy current: ', current);
        }
        console.log(this.queue.head);
        
    }
}

module.exports = {
    Queue
}
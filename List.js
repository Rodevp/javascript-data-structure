const {Nodo} = require('./Nodo');

class LinkedList {

    constructor() {
        this.head = null
    }

    add_item(value) {
        const nodo = new Nodo(value);
        nodo.add_next_nodo(this.head)
        this.head = nodo; 
    }

}

module.exports = {
    LinkedList
}
class Nodo {
    constructor(value) {
        this.value = value;
        this.next = null
    }

    add_next_nodo(element) {
        this.next = element
    }

    next_nodo() {
        return this.next
    }

}

module.exports = {
    Nodo
}
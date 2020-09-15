const {Stack} = require('./Stack');
const {Queue} = require('./Queue');

const stack = new Stack();
/**
 * stack.add_item(10);
stack.add_item(20);
stack.add_item(30);

console.log( 'la nueva cabeza es: ', stack.remove_top() );
console.log( 'la nueva cabeza es: ', stack.remove_top() );
console.log( 'la nueva cabeza es: ', stack.remove_top() );

console.log(stack.stack.head)

console.log('la pila está vacia?: ', stack.is_empty() );
 */


const queue = new Queue();
queue.add_item(1);
queue.add_item(2);
queue.add_item(3);

queue.remove_final();
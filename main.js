import { LinkedList } from './LinkedList.js';

// Create a new linked list
const list = new LinkedList();

// Add the animals to the list
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// Print the list
console.log(list.toString()); 
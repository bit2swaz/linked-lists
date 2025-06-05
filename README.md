# Linked Lists Implementation

A JavaScript implementation of a singly linked list data structure, created as part of The Odin Project curriculum.

## Features

The implementation includes a `Node` class and a `LinkedList` class with the following methods:

### Basic Operations
- `append(value)`: Add a new node to the end of the list
- `prepend(value)`: Add a new node to the start of the list
- `size()`: Get the total number of nodes
- `head()`: Get the first node
- `tail()`: Get the last node
- `at(index)`: Get the node at given index
- `pop()`: Remove the last node
- `contains(value)`: Check if a value exists in the list
- `find(value)`: Get the index of a node containing the value
- `toString()`: Convert the list to string format: ( value ) -> ( value ) -> null

### Extra Features
- `insertAt(value, index)`: Insert a new node at the given index
- `removeAt(index)`: Remove the node at the given index

## Usage Example
```javascript
import { LinkedList } from './LinkedList.js';

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");

console.log(list.toString());
// Output: ( dog ) -> ( cat ) -> ( parrot ) -> null
```

## Setup
1. Clone this repository
2. Make sure you have Node.js installed
3. Run `node main.js` to see the example in action

## Project Structure
- `Node.js`: Contains the Node class definition
- `LinkedList.js`: Contains the LinkedList class implementation
- `main.js`: Example usage and testing
- `package.json`: Project configuration with ES modules support
/*
Create a Stack class WITHOUT using an array and WITHOUT implementing any JavaScript array methods (Array.prototype.push, Array.prototype.pop, etc). Use an object for storage instead.

The Stack class should have the following methods:
push - adds a value to the top of the stack
pop - removes the top value from the stack
peek - tells us what value was last added to the stack
getSize - tells us how many values are currently in the stack
reset - removes all values from the stack

Examples:

stack.push('good');
stack.push('kid');
stack.storage = { 0: 'good', 1: 'kid'}
stack.push('maad');
stack.push('city');
stack.storage = { 0: 'good', 1: 'kid', 2: 'maad', 3: 'city'}
stack.peek() => return 'city'
stack.pop() => return 'city'
stack.storage = { 0: 'good', 1: 'kid', 2: 'maad'}
stack.getSize => return 3
stack.reset()
stack.storage = {}
 */

class Stack {}

export default Stack;

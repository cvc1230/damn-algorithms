/*
Create a Queue class WITHOUT using an array and WITHOUT implementing any JavaScript array methods (Array.prototype.push, Array.prototype.shift, etc). Use an object for storage instead.

The Queue class should have the following methods:
enqueue - adds a value to the back of the queue
dequeue - removes the value from the front of the queue
peek - tells us what value was first added to the queue
getSize - tells us how many values are currently in the queue
reset - removes all values from the queue

Examples:

queue.enqueue('good');
queue.enqueue('kid');
queue.storage = { 0: 'good', 1: 'kid' }
queue.enqueue('maad');
queue.enqueue('city');
queue.storage = { 0: 'good', 1: 'kid', 2: 'maad', 3: 'city' }
queue.peek() => return 'good'
queue.dequeue() => return 'good'
queue.storage = { 1: 'kid', 2: 'maad', 3: 'city' }
queue.getSize => return 3
queue.reset()
queue.storage = {}
 */

class Queue {}

export default Queue;

import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

// Test extra credit
list.insertAt("lizard", 3);
console.log(list.toString());

list.removeAt(2);
console.log(list.toString());

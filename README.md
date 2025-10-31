# 🧩 Linked List Implementation (JavaScript)

A simple **Linked List** data structure implemented in **JavaScript (ES6)**.  
This project demonstrates how to create, traverse, and manipulate linked lists using classes — including basic operations like adding, removing, and finding nodes, plus extra credit methods for insertion and deletion at specific indices.

---

## 📚 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Installation & Setup](#️-installation--setup)
- [Usage Example](#-usage-example)
- [API Reference](#-api-reference)
- [Concepts Covered](#-concepts-covered)
- [Technologies Used](#-technologies-used)
- [License](#-license)

---

## 🚀 Features

| Method                   | Description                                                                 |
| ------------------------ | --------------------------------------------------------------------------- |
| `append(value)`          | Adds a new node containing `value` to the end of the list.                  |
| `prepend(value)`         | Adds a new node containing `value` to the start of the list.                |
| `size()`                 | Returns the total number of nodes in the list.                              |
| `head()`                 | Returns the first node in the list.                                         |
| `tail()`                 | Returns the last node in the list.                                          |
| `at(index)`              | Returns the node at the specified index.                                    |
| `pop()`                  | Removes the last node from the list.                                        |
| `contains(value)`        | Returns `true` if the list contains the given value.                        |
| `find(value)`            | Returns the index of the node containing the value, or `null` if not found. |
| `toString()`             | Returns a string representation of the list.                                |
| `insertAt(value, index)` | _(Extra Credit)_ Inserts a node with the given value at a specific index.   |
| `removeAt(index)`        | _(Extra Credit)_ Removes the node at a specific index.                      |

---

## 🗂 Project Structure

linked-list/
├── LinkedList.js # Contains Node and LinkedList classes
├── main.js # Script to test and demonstrate LinkedList functionality
└── README.md # Documentation file

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/linked-list.git
   cd linked-list
   ```

````

2. **Ensure Node.js (v16 or later) is installed**

3. **Run the test file**

   ```bash
   node main.js
````

---

## 💡 Usage Example

```js
import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
// Output: ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

// Insert a new node at index 3
list.insertAt("lizard", 3);
console.log(list.toString());
// Output: ( dog ) -> ( cat ) -> ( parrot ) -> ( lizard ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

// Remove node at index 2
list.removeAt(2);
console.log(list.toString());
// Output: ( dog ) -> ( cat ) -> ( lizard ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
```

---

## 🧠 API Reference

### `append(value)`

Adds a new node containing the given `value` to the end of the list.

### `prepend(value)`

Adds a new node containing the given `value` to the start of the list.

### `size()`

Returns the total number of nodes in the list.

### `head()`

Returns the first node in the list.

### `tail()`

Returns the last node in the list.

### `at(index)`

Returns the node located at the given index, or `null` if the index is out of bounds.

### `pop()`

Removes the last element (tail) from the list.

### `contains(value)`

Returns `true` if the list contains the given value, otherwise returns `false`.

### `find(value)`

Returns the index of the node containing `value`, or `null` if not found.

### `toString()`

Returns a formatted string representation of the list:

```
( value ) -> ( value ) -> ( value ) -> null
```

### `insertAt(value, index)`

Inserts a new node with the provided value at the specified index.
If the index is out of range, the operation is ignored.

### `removeAt(index)`

Removes the node located at the specified index.
If the index is invalid, the operation is ignored.

---

## 🧩 Concepts Covered

- Linked List fundamentals
- Node creation and pointer manipulation
- Traversal and search operations
- Class-based programming in JavaScript
- Modular ES6 imports and exports

---

## 🧰 Technologies Used

- **JavaScript (ES6+)**
- **Node.js**

---

## 🪪 License

This project is licensed under the **MIT License**.
You’re free to use, modify, and distribute this code with attribution.

---

## ✍️ Author

**Kazi Arman**
📧 [kaziarman@proton.me](mailto:kaziarman@proton.me)
🌐 [https://github.com/kaziarman23](https://github.com/kaziarman23)

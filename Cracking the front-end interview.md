# Cracking the front-end interview

### HTML and CSS

+ Be prepared to be asked to code up a layout based on a mockup
+ Basic concepts:
  + CSS animations
  + CSS sprites
  + Pseudo classes
  + Grid systems
  + Semantic markup
+ Know about CSS preprocessors like SASS or LESS and their benefits.
+ Familiar with CSS naming conventions like BEM and OOCSS.
+ Tips:
  + Use codepen as playground
  + Check out dribble, since there are many simple yet nice designs to recreate.

### Javascript Concepts

+ Prototypal inheritance
+ Scoping
+ Closures
+ Event loop
+ Event bubbling
+ Apply, call and bind
+ Callbacks and promises
+ Variable and functoin hoisting
+ Currying
+ ES6 features
+ Different way of iterating

### Design Patterns

+ Decorator
+ Factory
+ Singleton
+ Revealing module
+ Facade
+ Observer
+ MVC, MVP MVVM

### Computer Science Concepts

+ Data structures:

  - [ ] Unit test: try Mocha

  - [x] Linked lists (Singly)

  - ```javascript
    function Node (element) {
      this.element = element;
      this.next = null;
    }
    function LinkedList () {
      this.head = new Node('head');
      this.find = find;
      this.insert = insert;
      this.display = display;
      this.findPre = findPre;
      this.remove = remove;
      function find (value) {
        var curNode = this.head;
        while (curNode && curNode.element != value) {
          curNode = curNode.next;
        }
        return curNode;
      }
      function insert (newValue, nodeValue) {
        var curNode = this.find(nodeValue);
        if (!curNode) {
          console.log('No such node!');
          return;
        }
        var newNode = new Node(newValue);
        newNode.next = curNode.next;
        curNode.next = newNode;
      }
      function findPre (nodeValue) {
        var curNode = this.head;
        while (curNode.next && curNode.next.element !== nodeValue) {
          curNode = curNode.next;
        }
        return curNode;
      }
      function remove (nodeValue) {
        var curNode = this.find(nodeValue);
        if (!curNode) {
          console.log('No such node!');
          return;
        }
        if (curNode.element === this.head.element) {
          this.head = this.head.next;
          return;
        }
        var preNode = this.findPre(nodeValue);
        preNode.next = curNode.next;
      }
      function display () {
        var curNode = this.head;
        while (curNode) {
          console.log(curNode.element);
          curNode = curNode.next;
        }
      }
    }
    ```

  - [ ] Hashtables

  - [ ] Queues

    ```javascript
    function Queue () {
      this.store = [];
      this.enqueue = enqueue;
      this.dequeue = dequeue;
      this.empty = empty;
      this.front = front;
      this.back = back;
      this.toString = toString;
      function enqueue (ele) {
        this.store.push(ele);
      }
      function dequeue () {
        if (this.empty()) {
          return 'this queue is empty';
        }
        return this.store.shift();
      }
      function empty () {
        return this.store.length === 0;
      }
      function front () {
        if (this.empty) {
          return 'this queue is empty';
        }
        return this.store[0];
      }
      function back () {
        if (this.empty) {
          return 'this queue is empty';
        }
        return this.store[this.store.length - 1];
      }
      function toString () {
        return this.store.join();
      }
      function clear () {
        delete this.store;
        this.store = [];
      }
    }
    ```

  - [x] Stacks

    ```javascript
    function Stack () {
      this.store = [];
      this.top = 0;
      this.push = push;
      this.pop = pop;
      this.peek = peek;
      this.length = this.top;
      this.clear = clear;
      function push (ele) {
        this.store[this.top++] = ele;
      }
      function pop () {
        if (this.top === 0) {console.log('empty stack'); return;}
        return this.store[this.top--];
      }
      function peek () {
        return this.store[this.top-1];
      }
      function clear () {
        delete this.store;
        this.store = [];
        this.top = 0;
      }
    }
    ```

  - [ ] Trees(binary trees and heaps)

  - [ ] Graphs (Know how to do BFS and DFS)

+ Sorting (Make note of their time and space complexity)

  - [ ] Binary search

  - [x] Bubble sort 

    + Time complexity: O(n^2)
    + In place: O(1) 
    + Stable

    ```javascript
    var bubbleSort = function (arr) {
      for (var i = 0; i < arr.length; i++) {
        for (var j = arr.length - 1; j > i; j--) {
          if (arr[j] < arr[j-1]) {
            var tmp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = tmp;
          }
        }
      }
      return arr;
    }
    ```

  - [x] Insertion sort

    + Time complexity: O(n^2)
    + In place: O(1)
    + Stable

    ```javascript
    var insertionSort = function (arr) {
      for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
          if (arr[i] < arr[j]) {
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
          }
        }
      }
      return arr;
    }
    ```

  - [x] Selection sort

    - Time Complexity: O(n^2)
    - In place: O(1)
    - Unstable

    ```javascript
    var selectionSort = function (arr) {
      var len = arr.length;
      var minIndex, tmp;
      for (var i = 0; i < len; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
          if (arr[minIndex] > arr[j]) {
            minIndex = j;
          }
        }
        tmp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = tmp;
      }
      return arr;
    }
    ```

  - [x] Merge sort

    + Time complexity: O(nlogn)
    + Out places: O(n)
    + Stable

    ```javascript
    var mergeSort = function (arr) {
      if (arr.length <= 1) {
        return arr;
      }
      var mid = Math.floor(arr.length / 2);
      var left = mergeSort(arr.slice(0, mid));
      var right = mergeSort(arr.slice(mid));
      var result = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
      if (right.length) {
        result = result.concat(right);
      } else {
        result = result.concat(left);
      }
      return result;
    }
    ```

    

  - [x] Quick sort

    + Time complexity: O(nlogn)
    + Out place: O(logn)
    + Unstable

    ```javascript
    var quickSort = function (arr) {
      if (arr.length <= 1) {
        return arr;
      }
      var pivotIndex = Math.floor(arr.length / 2);
      var pivot = arr.splice(pivotIndex, 1)[0];
      var left = [];
      var right = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      return quickSort(left).concat(pivot, quickSort(right));
    }
    ```

  - [ ] Heap sort


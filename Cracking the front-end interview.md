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

  + Unit test: try Mocha
  + Linked lists
  + Hashtables
  + Stacks and queues
  + Trees(binary trees and heaps)
  + Graphs (Know how to do BFS and DFS)

+ Sorting (Make note of their time and space complexity)

  + Binary search

  + Bubble sort 

    + Time complexity: O(n^2)
    + In place 
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

  + Insertion sort

    + Time complexity: O(n^2)
    + In place
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

  + Selection sort

    - Time Complexity: O(n^2)
    - In place
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

  + Merge sort

    + Time complexity: O(nlogn)

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

    

  + Quick sort


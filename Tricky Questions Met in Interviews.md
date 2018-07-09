# Tricky Questions Met in Interviews

### JavaScript related

+ `switch`

  + Note that `default` without break will not jump out of switch, place `default` at first will disable it.

  + ```javascript
    var a = 1;
    switch (a) {
      case 1:
        a += 1;
        console.log(a);
      default:
        console.log(a);
      case 2:
        a += 1;
        console.log(a);
      case 3:
        a += 1;
        console.log(a);
    }
    // 2 2 3 4
    ```

+ `let` related

  + Scope

  + ```javascript
    function varTest() {
      var x = 1;
      if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
      }
      console.log(x);  // 2
    }
    
    function letTest() {
      let x = 1;
      if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
      }
      console.log(x);  // 1
    }
    ```

  + `this` 

    ```javascript
    var x = 'global';
    let y = 'global';
    console.log(this.x); // "global"
    console.log(this.y); // undefined
    ```

  + Redeclaration cause error

    ```javascript
    if (x) {
      let foo;
      let foo; // SyntaxError thrown.
    }
    ```

  + No hoisting

    ```javascript
    function do_something() {
      console.log(bar); // undefined
      console.log(foo); // ReferenceError
      var bar = 1;
      let foo = 2;
    }
    // prints out 'undefined'
    console.log(typeof undeclaredVariable);
    // results in a 'ReferenceError'
    console.log(typeof i);
    let i = 10;
    ```

  + Other situation

    ```javascript
    var a = 1;
    var b = 2;
    
    if (a === 1) {
      var a = 11; // the scope is global
      let b = 22; // the scope is inside the if-block
    
      console.log(a);  // 11
      console.log(b);  // 22
    } 
    
    console.log(a); // 11
    console.log(b); // 2
    ```

+ Arithmetic operation

  + Addition (+)

    > The addition operator produces the sum of numeric operands or string concatenation.

    ```javascript
    "1" + 2 + 3 // "123"
    1 + "2" + 3 // "123"
    1 + 2 + "3" // "33"
    undefined + 2 + "1" // "NaN1"
    ```

+ Type conversion

+ Binary search patterns
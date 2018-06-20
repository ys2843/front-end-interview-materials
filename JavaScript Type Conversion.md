# JavaScript Type Conversion

When dealing with type conversion, JS has 2 important functions to convert the type between object and primitive: `valueOf()` and `toString()`. 

First lets have a look at `valueOf()` function:

>  JavaScript calls the `valueOf` method to convert an object to a primitive value. JavaScript automatically invokes it when encountering an object where a primitive value is expected.
>
>  By default, the `valueOf` method is inherited by every object descended from [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object). Every built-in core object overrides this method to return an appropriate value. If an object has no primitive value, `valueOf` returns the object itself.
>
>  You can use `valueOf` within your own code to convert a built-in object into a primitive value. When you create a custom object, you can override `Object.prototype.valueOf()` to call a custom method instead of the default [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)method.

`valueOf`funtion just return the object itself.

Then lets get to know more about `toString()`:

### Implicitly Conversion

To convert the type manually, we use functions.

+ String()

  + Primitive

    ```javascript
    String(123) // "123"
    String('abc') // "abc"
    String(true) // "true"
    String(undefined) // "undefined"
    String(null) // "null"
    ```

  + Object

    First call `toString()`, if primitive then `String()`. If not, call `valueOf()`.

    ```javascript
    String({a: 1}) // "[object Object]"
    String([1, 2, 3]) // "1,2,3"
    ```

+ Number()

  + MORE STRICT than `parseInt()`. For String input, if there is char in input, result will be `NaN`.
  + The step of `Number()` conversion:
    1. Call `valueof`
    2. Call `toString()`

  + Primitive type input 

    ```javascript
    // 数值：转换后还是原来的值
    Number(324) // 324
    
    // 字符串：如果可以被解析为数值，则转换为相应的数值
    Number('324') // 324
    
    // 字符串：如果不可以被解析为数值，返回 NaN
    Number('324abc') // NaN
    
    // 空字符串转为0
    Number('') // 0
    
    // 布尔值：true 转成 1，false 转成 0
    Number(true) // 1
    Number(false) // 0
    
    // undefined：转成 NaN
    Number(undefined) // NaN
    
    // null：转成0
    Number(null) // 0
    ```

  + Object input

    ```javascript
    Number({a: 1}) // NaN
    Number([1, 2, 3]) // NaN
    Number([5]) // 5
    ```

+ Boolean()

  + There are only 5 conditions `Boolean()` return `false`.
    1. `undefined`
    2. `null`
    3. `-0` or`+0`
    4. `NaN`
    5. `''`
  + All object is converted to `true`. Even `[]`, `{}`, `new Boolean(false)`

### Auto Conversion

| Original Value   | Converted to Number | Converted to String | Converted to Boolean |
| ---------------- | ------------------- | ------------------- | -------------------- |
| false            | 0                   | "false"             | false                |
| true             | 1                   | "true"              | true                 |
| 0                | 0                   | "0"                 | false                |
| 1                | 1                   | "1"                 | true                 |
| "0"              | 0                   | "0"                 | **true**             |
| "000"            | 0                   | "000"               | **true**             |
| "1"              | 1                   | "1"                 | true                 |
| NaN              | NaN                 | "NaN"               | false                |
| Infinity         | Infinity            | "Infinity"          | true                 |
| -Infinity        | -Infinity           | "-Infinity"         | true                 |
| ""               | **0**               | ""                  | **false**            |
| "20"             | 20                  | "20"                | true                 |
| "twenty"         | NaN                 | "twenty"            | true                 |
| [ ]              | **0**               | ""                  | true                 |
| [20]             | **20**              | "20"                | true                 |
| [10,20]          | NaN                 | "10,20"             | true                 |
| ["twenty"]       | NaN                 | "twenty"            | true                 |
| ["ten","twenty"] | NaN                 | "ten,twenty"        | true                 |
| function(){}     | NaN                 | "function(){}"      | true                 |
| { }              | NaN                 | "[object Object]"   | true                 |
| null             | **0**               | "null"              | false                |
| undefined        | NaN                 | "undefined"         | false                |

+ 
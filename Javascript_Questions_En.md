# Javascript — Interview handbook

### 1. 请解释事件委托 （event delegation）:

事件委托是将事件监听添加到父元素上，而不是子元素上。当触发子元素时，冒泡到父元素，监听器会被触发。

好处：

1. 减少内存的占用，不用为每个子元素创建监听器
2. 无需从已删除的元素上解绑监听器，也无需从新添加的元素上绑定监听器

### 2. 请简述`javascript`中的`this`

1. 当调用函数时使用new关键字，函数内的this指全新的对象
2. 当apply，call， bind关键字用作调用，this指向传入的对象
3. 当函数作为对象中的方法被调用时，this指向调用的对象
4. 如果不符合上述规则，则this指向全局对象。浏览器下this指向window对象，但严格模式下，this值为undefined

### 3. 请解释原型继承的工作原理

每个js对象都有一个prototype，指向对象的prototype对象。当访问一个对象的属性时，如果没有在该对象上找到，则会在对象的原型上去找，还会搜索对象原型的原型，一层一层向上搜索知道达到原型链的末尾。原型链模拟继承。

### 4. 说说对AMD(Asynchronous Module Definition)和commonjs的了解

他们都是实现js模块化的方式。commonjs是同步加载，在加载完引入的模块后才能执行后面的代码，所以适用于服务器端开发，因为服务端模块都在本地。而amd是异步加载允许回调函数，因而更适合浏览器。

amd的语法比较冗长，commonjs更接近于其他语言习惯。大多数情况下，amd没有使用的必要，因为把js都捆绑进一个文件中后，异步加载并没有什么好处。

###5. 请解释下面代码为什么不能用作 IIFE：`function foo(){ }();`，需要作出哪些修改才能使其成为 IIFE？

IIFE是Immediately Invoked Function Expressions, 代表立即执行函数。

```javascript
(function (){})();
(function (){}());
```

### 6. `null`、`undefined`和未声明变量之间有什么区别？如何检查判断这些状态值？

当你没有提前使用`var`、`let`或`const`声明变量，就为一个变量赋值时，该变量是未声明变量（undeclared variables）。未声明变量会脱离当前作用域，成为全局作用域下定义的变量。在严格模式下，给未声明的变量赋值，会抛出`ReferenceError`错误。和使用全局变量一样，使用未声明变量也是非常不好的做法，应当尽可能避免。要检查判断它们，需要将用到它们的代码放在`try`/`catch`语句中。

```
function foo() {
  x = 1; // 在严格模式下，抛出 ReferenceError 错误
}

foo();
console.log(x); // 1
```

当一个变量已经声明，但没有赋值时，该变量的值是`undefined`。如果一个函数的执行结果被赋值给一个变量，但是这个函数却没有返回任何值，那么该变量的值是`undefined`。要检查它，需要使用严格相等（`===`）；或者使用`typeof`，它会返回`'undefined'`字符串。请注意，不能使用非严格相等（`==`）来检查，因为如果变量值为`null`，使用非严格相等也会返回`true`。

```
var foo;
console.log(foo); // undefined
console.log(foo === undefined); // true
console.log(typeof foo === 'undefined'); // true

console.log(foo == null); // true. 错误，不要使用非严格相等！

function bar() {}
var baz = bar();
console.log(baz); // undefined
```

`null`只能被显式赋值给变量。它表示`空值`，与被显式赋值 `undefined` 的意义不同。要检查判断`null`值，需要使用严格相等运算符。请注意，和前面一样，不能使用非严格相等（`==`）来检查，因为如果变量值为`undefined`，使用非严格相等也会返回`true`。

```
var foo = null;
console.log(foo === null); // true

console.log(foo == undefined); // true. 错误，不要使用非严格相等！
```

作为一种个人习惯，我从不使用未声明变量。如果定义了暂时没有用到的变量，我会在声明后明确地给它们赋值为`null`。

### 7. 什么是闭包（closure），以及为什么使用闭包？

什么是闭包：

闭包是指内部函数总可以访问其所在外部函数中声明的参数和变量，即使在外部函数被返回之后。可以通过闭包实现公有，私有和特权变量。

为什么要使用：

1. 从函数外部访问其中变量，使变量不能被随意修改，只能通过制定接口操作。
2. 将创建的变量的值保存在内存中，供本地使用

### 8. 请说明`.forEach`循环和`.map()`循环的主要区别，以及分别何时使用？

foreach遍历一个数组，对每个元素之行回调函数，没有返回值。

map遍历一个数组，将每个元素映射到一个新的元素，从而创建返回一个新数组。

foreach在原始数组上做迭代，map返回新数组不改变原数组。

### 9. 匿名函数的典型应用场景是什么？

1. IIFE，用来封装局部作用域内的代码，使变量不会暴露到全局作用域
2. 作为回调函数，只使用一次的函数
3. 用于函数式编程，如map传入的函数，类似回调函数

### 10. 你如何组织自己的代码？（使用模块模式（module pattern）还是经典继承（classical inheritance）？）

### 11. 宿主对象（host objects）和原生对象（native objects）的区别是什么？

原声对象是有ECMAScript定义的内置对象，object, array, Date, RegExp, Function等

诉诸对象是有运行时环境提供的（浏览器或node），比如window，XMLHTTPRequest等

### 12. 下列语句有何区别：`function Person(){}`、`var person = Person()`和`var person = new Person()`？

第一种是声明一个函数，首字母大写说明是构造函数。

第二个是用调用普通函数的方法调用构造函数，因为构造函数通常不返回值，所以undefined会赋值给调用变量。

第三个是通过构造函数创建对象实例。

### 13. `.call`和`.apply`有什么区别？

都用于调用函数，第一个参数用作函数内this的值。被调用函数的输入，call是用逗号分隔，apply传入数组。

### 14. 请说明`Function.prototype.bind`的用法。

新建一个函数，将this设置为提供的值。

### 15. 功能检测（feature detection）、功能推断（feature inference）和使用 UA 字符串之间有什么区别？

功能检测包括 浏览器是否支持某段代码，若不支持，则运行不同的代码。

ua是浏览器报告的字符串，允许识别请求用户代理的应用类型，操作系统，应用供应商和应用版本

### 16. 请尽可能详细地解释 Ajax。

Ajax 是一种异步web应用的开发技术。通过ajax，客户端可以在后台想服务端请求和检索数据，在不影响现有页面的显示的情况下，动态更改页面内容2⃣而无需重新加载整个页面。

### 17. 使用Ajax的优缺点分别是什么？

优点：

+ 交互性更好，无需重新加载整个页面
+ 减少和服务器的链接，脚本也样式只需请求一次
+ 状态可以维持在一个页面上。

缺点：

+ 动态页面很难收藏
+ 依靠javascript显示内容

### 18. 请说明 JSONP 的工作原理，以及它为什么不是真正的 Ajax？

jsonp使用script发送跨域请求，使用callback查询参数。然后服务器将数据包装在一个printdata的函数中返回客户端。

### 19. 你使用过 JavaScript 模板吗？用过什么相关的库？

JSX

###20. 请解释变量提升

声明的函数或者是使用var声明的变量会被提升到作用域的顶部。赋值语句则不会提升。

###21. 请描述事件冒泡

当在一个元素上出发了一个事件，如果有监听器则会处理该事件，如果没有，事件会被传到它的父级元素，发生同样的事情，最后知道事件到达祖先元素。

###22. “attribute” 和 “property” 之间有什么区别？

attribute是在html中定义的，property是在dom上定义的。

### 23. 为什么扩展 JavaScript 内置对象是不好的做法？

因为这样做很危险，拓展内置对象就是将属性或方法添加到prototype中，如果你使用的其他库也添加了相同的属性或方法，但是行为不一样。那这些实现会相互覆盖，代码就不能正常运行。

### 24. document 中的`load`事件和`DOMContentLoaded`事件之间的区别是什么？

load事件仅在dom和所有相关资源全部加载完成后才会出发

domcontentloaded在html文档加载完成后，就会触发，无需等待样式表，图像和子框架的完成加载。

### 25. `==`和`===`的区别是什么？

==是抽象相等，会在必要的类型转换后再进行比较。===是严格相等，不会进行类型转换。

==，null和undefined相等。

### 26. 请解释关于JavaScript的同源策略

同源策略是防止javascript发起跨域请求。源被定义为url，主机名和端口号的组合。

此策略可防止页面上的恶意脚本通过dom访问另一个页面上的敏感数据。

### 27. 请使下面的语句生效：`duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]`

```javascript
function duplicate(arr){
	arr.forEach(function(para, index, arr){
        arr.push(para);
	});
    return arr;
}
```

### 28. 什么是`"use strict";`？使用它有什么优缺点？

### 29. 为什么不要使用全局作用域？

因为每个脚本都可以访问全局作用域，使用全局命名空间定义变量，会发生冲突。使用模块模式（iife）封装变量。

### 30. 为什么要使用`load`事件？这个事件有什么缺点吗？你知道一些代替方案吗，为什么使用它们？

### 31. 请解释单页应用是什么以及如何使其对SEO友好。

单页应用客户端渲染取代了服务端渲染，浏览器加载初始页面和所有脚本样式。当用户导航到其他地址时，页面不会刷新。仅通过ajax从服务器检索新页面所需的数据，spa通过javascript动态更新页面。

好处：

+ 用户不会看到切换页面时的白屏
+ 对服务器http请求减少
+ 客户端和服务端关注点分离，通过api交流

坏处：

+ 初始页面加载慢
+ 依赖javascript
+ 难以被搜索引擎抓取 

### 32. 请解释Promise

### 33.ES6 新特性

### 34. 箭头函数作用域

### 35. 解释RESTFUL api



- javascript相关
- 原型链与作用域
- 闭包
- 模块化(amd/cmd/umd/ES6 module)
- 跨域多种方式，如jsonp
- javascript中的this指向问题
- CORS
- AJAX的几种状态，ajax与fetch，hijax
- iframe与onload阻塞主页面
- 前端安全与CSRF，XSS，SQL注入，DDOS
- js异步加载
- IE内存泄露
- js创建对象的几种方式
- js继承的几种方式与优缺点
- SEO
- ES6新特性
- promise与generator
- 服务器推
- jQuery相关
- js捕获与冒泡
- drag和drop实现拖拽
- cookie/session/本地存储
- 雅虎网站优化的军规
- css与js的阻塞加载
- chrome/IE浏览器事件兼容
- css相关
- 垂直水平居中
- 盒模型
- 浮动与定位
- 排版引擎与js引擎
- GPU加速与动画性能
- DOM1,DOM2,DOM3规范
- css性能
- h标签与title标签
- em与百分比等
- 浏览器缓存与应用缓存
- div与table布局
- web标准
- css的hack技术
- png/jpg/webp图片格式
- canvas与svg
- css3的新特性，如flex布局等
- 响应式布局
- link与import区别
- 三栏自适应
- b和strong,i和em区别
- 减少页面回流
- BFC
- 硬件加速与动画优化
- 前端自动化相关
- webpack相关
- webpack-dev-server相关
- 单页面打包工具+多页面打包工具
- babel相关
- 其他知识
- http/1.1与http2
- http三次握手协议
- http状态码
- json与xml
- 前端性能优化
- nodejs/npm相关内容
- 算法
- 几种排序算法
- 回文字符
- 递归(很重要)
- 其他常见的前端算法
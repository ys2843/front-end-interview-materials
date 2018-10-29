# High Performance JavaScript

### Chapter 1. Loading and Execution

One of the most important aspect of web performance is JavaScript, for its blocking nature, which means when encountered a <script> the browser will stop everything while JavaScript code is being executing no matter the code is inline, import from external.

#### Script Positioning

Since JavaScript code blocks the page from rendering until if has fully downloaded and executed.

> The best approach is to put the <script> at the bottom of body

#### Non-blocking Script

+ **`defer`** : Indicate that this script do not modify DOM so it can be deferred executing safely after everything is loaded. The time of execution is before window.onload triggered.

+ **Dynamic script element**: Create a script element using JavaScript, and best to append it to <head>.

  ```javascript
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "file1.js"; 
  document.getElementsByTagName("head")[0].appendChild(script);
  ```

  By using this method, it is important that download and execute the script do not block other process of the page.

  ```javascript
  function loadScript(url, callback){
      var script = document.createElement("script") 
      script.type = "text/javascript";
      if (script.readyState){ 
          script.onreadystatechange = function(){
              if (script.readyState == "loaded" || script.readyState == "complete"){ script.onreadystatechange = null;
              callback(); }
          
      };
  	} else { //Others script.onload = function(){
      	callback(); };
      }
      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script); 
  }
  ```

+ **XMLHttpRequest Script Injection**

  This approach including 3 steps:

  + Create an XMLHttpRequest to download the JavaScript file
  + Inject the JS using a dynamic <script> element

  ```javascript
  const xhr = XMLHttpRequest();
  xhr.open("GET", "file1.js", true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.states < 300 || xhr.status == 304) {
              const script = document.createElement("script");
              script.type = "text/javascript";
              script.text = xhr.responseText;
              document.body.appendChild(script);
          }
      }
  }
  ```

  Advantages: 

  + The code returned is not executed right away, which gives you the flexibility to run it.

  Limitation:

  + There will be CORS problem which means you can not download it from CDN, which make this approach not used on large-scale web applications.

#### Recommended Nonblocking Pattern

1. Include the code neccesary for dynamically loading JavaScript (potentially just a loader function)
2. Load the rest of the code

For example,

```html
<script type="text/javascript" src="loader.js">
</script> <script type="text/javascript">
    loadScript("the-rest.js", function(){
    Application.init(); });
</script>
```



---

### Charpter 2 Data Access

There 4 ways of accessing a data

| Methods        | Description                    |
| -------------- | ------------------------------ |
| Literal Value  | Anything that is itself        |
| Variables      | A location for storing data    |
| Array items    | A numerically indexed location |
| Object members | A string indexed location      |

#### Managing Scope

Because it always takes longer to identify a variable on the scope chain with deeper level, it is suggested to manage the scope to avoid too much deep level access.

+ Scope Chain and Identifier Resolution

  In JavaScript, functions are represented as object, which means it has properties just like other objects. And such properties including external and internal properties. One of the internal properties is [[Scope]], which can not be accessed by developer. 

  Everytime a function is executed, a corresponding **execution context** is created by using funtion's [[Scope]] property. The values in [[Scope]] are copied to execution context.


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

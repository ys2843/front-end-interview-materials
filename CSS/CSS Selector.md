# CSS Selector

```css
/*Element*/
li {
} 

/*class*/
.hello {
}

/*id*/
#name {
}

/*Star select all elements*/
* {
	border: 1px solid lightgrey;
}

/*Descendant Selector*/
li a {
	color: red;
}

/*Adjacent Selector*/
h4 + ul {
	border: 4px solid red;
}

/*Attribute Selector*/
a[href="http://www.google.com"] {
	background: blue;
}

/*nth of type*/
li:nth-of-type(odd/even/3){
	background: purple;
}
```


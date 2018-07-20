# Centering in CSS

### Horizontally

#### 1. Is it inline or inline-* elements (like text or links)?

You can center inline elements horizontally, within a block-level parent element, with just:

```css
.center-children {
  text-align: center;
}
```

This will work for inline, inline-block, inline-table, inline-flex, etc.

#### 2. Is it a block level element?

You can center a block-level element by giving it `margin-left` and `margin-right` of `auto` (and it has a set `width`, otherwise it would be full width and wouldn't need centering). That's often done with shorthand like this:

```
.center-me {
  margin: 0 auto;
}
```

This will work no matter what the width of the block level element you're centering, or the parent.

Note that you can't `float` an element to the center. [There is a trick though.](http://css-tricks.com/float-center/)

#### 3. Is there more than one block level element?

If you have two or more block-level elements that need to be centered horizontally *in a row*, chances are you'd be better served making them a different `display` type. Here's an example of making them `inline-block` and an example of flexbox

Unless you mean you have multiple block level elements stacked on top of each other, in which case the auto margin technique is still fine

### Vertically

#### 1. Is it inline or inline-* elements (like text or links)?

#### 1.1 Is it a single line?

Sometimes inline / text elements can appear vertically centered, just because there is equal padding above and below them.

```css
.link {
  padding-top: 30px;
  padding-bottom: 30px;
}
```

If padding isn't an option for some reason, and you're trying to center some text that you know will not wrap, there is a trick were making the `line-height` equal to the height will `center` the text.

```css
.center-text-trick {
  height: 100px;
  line-height: 100px;
  white-space: nowrap;
}
```

#### 2. Is it multiple lines?

Equal padding on top and bottom can give the centered effect for multiple lines of text too, but if that isn't going to work, perhaps the element the text is in can be a table cell, either literally or made to behave like one with CSS. The [`vertical-align`](http://css-tricks.com/almanac/properties/v/vertical-align/) property handles this, in this case, unlike what it normally does which is handle the alignment of elements aligned on a row. ([More on that.](http://css-tricks.com/what-is-vertical-align/))

If something table-like is out, perhaps you could use flexbox? A single flex-child can be made to center in a flex-parent pretty easily.

```css
.flex-center-vertically {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 400px;
}
```

Remember that it's only really relevant if the parent container has a fixed height (px, %, etc), which is why the container here has a height.

If both of these techniques are out, you could employ the "ghost element" technique, in which a full-height pseudo element is placed inside the container and the text is vertically aligned with that.

```css
.ghost-center {
  position: relative;
}
.ghost-center::before {
  content: " ";
  display: inline-block;
  height: 100%;
  width: 1%;
  vertical-align: middle;
}
.ghost-center p {
  display: inline-block;
  vertical-align: middle;
}
```

#### 3. Is it a block-level element?

#### 3.1 Do you know the height of the element?

It's fairly common to *not* know the height in web page layout, for lots of reasons: if the width changes, text reflow can change the height. Variance in the styling of text can change the height. Variance in the amount of text can change the height. Elements with a fixed aspect ratio, like images, can change height when resized. Etc.

But if you do know the height, you can center vertically like:

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  height: 100px;
  margin-top: -50px; /* account for padding and border if not using box-sizing: border-box; */
}
```

#### 4. Is the element of unknown height?

It's still possible to center it by nudging it up half of it's height after bumping it down halfway:

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

#### 5. Can you use flexbox?

No big surprise, this is a lot easier in [flexbox](http://css-tricks.com/snippets/css/a-guide-to-flexbox/).

```css
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

### Both Horizontally and Vertically

You can combine the techniques above in any fashion to get perfectly centered elements. But I find this generally falls into three camps:

#### 1. Is the element of fixed width and height?

Using negative margins equal to half of that width and height, after you've absolutely positioned it at 50% / 50% will center it with great cross browser support:

```css
.parent {
  position: relative;
}

.child {
  width: 300px;
  height: 100px;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;

  margin: -70px 0 0 -170px;
}
```

#### 2. Is the element of unknown width and height?

If you don't know the width or height, you can use the transform property and a negative translate of 50% in both directions (it is based on the current width/height of the element) to center:

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

#### 3. Can you use flexbox?

To center in both directions with flexbox, you need to use two centering properties:

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### 4. Can you use grid?

This is just a little trick (sent in by Lance Janssen) that will pretty much work for one element:

```css
body, html {
  height: 100%;
  display: grid;
}
span { /* thing to center */
  margin: auto;
}
```


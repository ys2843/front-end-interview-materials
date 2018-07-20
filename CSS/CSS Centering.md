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

#### Is it multiple lines?

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


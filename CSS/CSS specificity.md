# CSS specificity

Specificity is a weight that is applied to a given CSS declaration, determined by the number of each [selector type](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#Selector_Types) in the matching selector. **When multiple declarations have equal specificity, the last declaration found in the CSS is applied to the element.** Specificity only applies when the same element is targeted by multiple declarations. As per CSS rules, [directly targeted elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#directly-targeted-elements) will always take precedence over rules which an element inherits from its ancestor.

### Calculation

The following list of selector types increases by specificity:

1. Type selectors (e.g., `h1`) and pseudo-elements (e.g., `::before`).
2. Class selectors (e.g., `.example`), attributes selectors (e.g., `[type="radio"]`) and pseudo-classes (e.g., `:hover`).
3. ID selectors (e.g., `#example`).

Universal selector (`*`), combinators (`+`, `>`, `~`, '` `') and negation pseudo-class (`:not()`) have no effect on specificity. (The selectors declared *inside* `:not()` do, however.)

Inline styles added to an element (e.g., `style="font-weight:bold"`) always overwrite any styles in external stylesheets, and thus can be thought of as having the highest specificity.
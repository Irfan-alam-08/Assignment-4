1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans :- getElementById() selects one element using its unique ID using in html
getElementsByClassName() selects all elements with the same class
querySelector() selects the first matching element using CSS selectors, and querySelectorAll() selects all matching elements.

2. How do you create and insert a new element into the DOM?
Ans :- We can create a new element using document.createElement().
Then we add text or content to it and insert it into the page using methods like appendChild() or append().

3. What is Event Bubbling? And how does it work?
Ans :- Event bubbling means when an event happens on a child element, it automatically moves upward to its parent elements.
if we click a button inside a div, the button’s event runs first, then the div’s event can also run.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans :- Event delegation means instead of adding event listeners to many child elements, we add one listener to a parent and handle events from there.
It’s useful because it saves memory space and also works for new elements added later in html dynamically.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans :- preventDefault() stops the browser’s default action, like stopping a form from submitting or a link from opening.
stopPropagation() stops the event from moving up or bubbling to parent elements.




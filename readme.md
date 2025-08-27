# The answers to your five questions are given below.


# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

✅ Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll

getElementById("id") → Finds one element by its id.

getElementsByClassName("class") → Finds all elements with that class (HTMLCollection, not array).

querySelector("selector") → Finds the first element that matches a CSS selector.

querySelectorAll("selector") → Finds all elements that match a CSS selector (NodeList).

# How to create and insert a new element into the DOM

✅const div = document.createElement("div"); // create element
div.innerText = "Hello World";             // set content
document.body.appendChild(div);            // insert into page



# What is Event Bubbling and how does it work?

✅Event bubbling means when you click on a child element, the event moves up (bubbles) through its parent elements.

Example: Click on a button inside a div → event goes button → div → body → document.

# What is Event Delegation in JavaScript? Why is it useful?

✅Event delegation = attaching one event listener to a parent instead of many children.

It works because of event bubbling.

Useful for performance and when elements are created dynamically.

# Difference between preventDefault() and stopPropagation()

✅preventDefault() → Stops the default action (e.g., stopping a link from opening, stopping form submission).

stopPropagation() → Stops the event from bubbling to parent elements.



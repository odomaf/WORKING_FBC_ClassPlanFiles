# INSTRUCTOR — Event Listener

## Learning Goals
- Use `.addEventListener()` to attach an event to an element.
- Dynamically update the DOM in response to user actions.
- Understand class toggling to change themes.

## Demo Flow (≤ 5 min)
1. Show the switch slider and explain the checkbox input.
2. In DevTools, demonstrate that the `.click` event triggers the function.
3. Explain how we track current mode using a variable.
4. Show that updating the container’s class changes theme colors instantly.

## Checks for Understanding
- What event are we listening for?
- Why do we use `.addEventListener()` instead of inline `onclick=`?
- How does changing the class affect styling?

## Common Pitfalls
- Forgetting the leading period when using `querySelector(".class")`.
- Overwriting multiple class names (e.g., forgetting `"container "` prefix).
- Not updating the variable tracking the mode.

## Notes
- Encourage students to inspect the container element and see its class name change live.
- Mention that event listeners are the foundation of all interactivity — everything from buttons to forms.

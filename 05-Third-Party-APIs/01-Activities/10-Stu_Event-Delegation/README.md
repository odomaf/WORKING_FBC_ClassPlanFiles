# 10-Stu_Event-Delegation — Shopping List Deletion

## 👟 User Story

As an online shopper, I want to have the ability to remove items from my list.

## ✅ Acceptance Criteria

- It's done when each item's **Remove** button can be clicked to remove its respective list item.

## 🧠 Notes

- Use **event delegation** on the `<ul id="shopping-list">`.
- Use DOM traversal to target the correct `<li>`.
- Remove the element with `.remove()`.

## 🧩 Hints

- Delegate a click handler from `#shopping-list` to `.delete-item-btn`.
- Use `$(event.target).closest('li')` to grab the list item.

## 🚀 Steps

1. On form submit, append a new `<li>` containing the item text and a **Remove** button.
2. Delegate a click handler for `.delete-item-btn` that removes the corresponding `<li>`.
3. Clear the input on successful add.

## 🏆 Bonus

- Disable the submit button for empty/whitespace input.
- Add keyboard support (press Enter to add).
- Persist the list in `localStorage`.

## References

- jQuery Event Delegation: https://learn.jquery.com/events/event-delegation/
- You Might Not Need jQuery: http://youmightnotneedjquery.com/

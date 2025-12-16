# 🐛 Reply Meta Data Is Incorrect

## Your Task

Work with a partner to debug a small inheritance + polymorphism example.

You have a parent class (ContentItem) and two child classes (Article and Reply).
Article should use the default printMetaData() method from ContentItem.
Reply should override printMetaData() so it includes its message.

---

## Expected Behavior

When you run printMetaData() on a Reply instance, it should print:

Created by AUTHOR on DATE with "MESSAGE"

---

## Actual Behavior

When you run printMetaData() on a Reply instance, it only prints:

Created by AUTHOR on DATE

(The message is missing.)

---

## Steps to Reproduce

1. Open your terminal
2. Run:
   node index.js

---

## Hints

- How can you modify printMetaData() for Reply without changing its functionality for Article?
- Which OOP concept allows two classes to share the same method name but behave differently?

---

## Bonus Challenge

Polymorphism is one of the four pillars of OOP.
What are the other three pillars?

Be ready to explain each one in a sentence or two.

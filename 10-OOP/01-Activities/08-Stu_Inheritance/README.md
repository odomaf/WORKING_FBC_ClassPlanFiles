# Implement Inheritance for Multiple Classes

## Overview

In this activity, you will practice class inheritance using modern JavaScript (ES6).

You will create a parent class that stores shared properties, then create multiple child classes that inherit from that parent using `extends` and `super()`.

---

## User Story

As a developer, I want to be able to instantiate several classes that inherit from a parent class so I can reuse shared structure and reduce duplicated code.

---

## Acceptance Criteria

Your work is complete when:

- A parent class named ContentItem is created with properties for:
  - author
  - createdAt
- The shared properties (author and createdAt) are removed from the child class constructors and only exist in the parent class.
- A class named Article extends ContentItem and includes:
  - a headline property
  - a reactions property initialized to an empty array
  - an addReaction() method that adds a reaction to the reactions array
- A class named Reaction extends ContentItem and includes:
  - a message property
- A new instance of Article is created and logged to the console.
- A new instance of Reaction is created and logged to the console.

---

## Notes

Use the MDN documentation for reference:

MDN — Class Inheritance  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#inheritance

---

## Hints

- `extends` sets up inheritance between classes.
- `super()` calls the parent class constructor.
- The child constructor should pass shared values (author, createdAt) up to the parent constructor.

---

## Bonus Challenge

Explain the benefits and disadvantages of inheritance in OOP.
Consider maintainability, flexibility, and when composition might be a better choice.

---

## Learning Goals

By completing this activity, you will be able to:

- Create a parent class that stores shared state
- Use `extends` to inherit from a parent class
- Use `super()` to initialize shared properties
- Create specialized child classes with unique properties and methods

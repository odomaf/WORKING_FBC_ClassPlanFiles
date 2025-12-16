# Creating Objects with Constructor Functions

## Overview

In this activity, you will practice Object-Oriented Programming (OOP) by creating objects using a constructor function.

Constructor functions act as templates (or blueprints) that allow you to create multiple objects with the same structure and behavior.

---

## User Story

As a developer, I want to create reusable objects using a constructor function so I can efficiently model real-world data.

---

## Acceptance Criteria

Your work is complete when:

- A constructor function named Article is created.
- The constructor accepts the following parameters:
  - author
  - headline
  - content
  - publishedDate
- Each parameter is assigned to a property using `this`.
- A method named `logSummary()` exists that prints the message:
  Written by AUTHOR on DATE
- A new object is created using the constructor.
- The method is called and prints to the console.

---

## Hints

- Use the `this` keyword to attach properties and methods to the object.
- Template literals can help format output strings, for example:
  Written by ${this.author} on ${this.publishedDate}

---

## Bonus Challenge

Research the following built-in JavaScript constructors:

- String
- Number
- Array
- Object
- Date

Think about when you might use one of these instead of creating your own constructor function.

---

## Learning Goals

By completing this activity, you will be able to:

- Explain what a constructor function is.
- Use `this` to define object properties.
- Add methods to objects.
- Create multiple objects from a single constructor function.

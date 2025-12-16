# 🏗️ Module 10 Mini-Project: Build Classes and Tests for a List Generator

## Overview
In this mini-project, you’ll work with a group to design **reusable classes** and write **unit tests** for an application that generates an HTML page displaying a user’s task list.

The focus of this project is on **object-oriented design**, **inheritance**, and **test-driven development**.

---

## 🧠 Project Goals
As a developer, I want to:

- Define classes that represent different parts of an application
- Write tests to validate the core behavior of each class

---

## ✅ Acceptance Criteria

Your project is complete when all of the following requirements are met.

---

### Component Base Class

- A `Component` class exists that accepts `children`
- `children` defaults to an empty array when not provided
- The `Component` class includes a `render()` method that throws an error with the message:
  
  Child class must implement render() method.

- The `Component` class includes a `renderInnerHTML()` method that:
  - Loops over `children`
  - Converts non-string children to strings by calling their `render()` method

---

### Header Class

- A `Header` class exists and **inherits from `Component`**
- The `Header` class includes a `render()` method
- The `render()` method returns the following HTML structure:

  <header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>

---

### TaskListItem Class

- A `TaskListItem` class exists and **inherits from `Component`**
- The class passes `children` to the parent `Component` class
- The class includes a `priority` property
- The `render()` method returns HTML in the following format:

  <li class="tasks-item">{INNER_HTML}</li>

- If `priority` is true, the class name `tasks-item-priority` is added to the list item

---

### TaskList Class

- A `TaskList` class exists and **inherits from `Component`**
- The class passes `children` to the parent `Component` class
- The `render()` method returns HTML in the following format:

  <ul class="tasks">{INNER_HTML}</ul>

---

### Testing Requirements

- A test suite exists for the `Component` class that verifies `render()` throws an error when called directly
- A test suite exists for the `Header` class that verifies the header renders correctly with the date
- A test suite exists for the `TaskListItem` class that:
  - Verifies a normal task renders correctly
  - Verifies a priority task renders correctly
- A test suite exists for the `TaskList` class that verifies the list renders correctly with its tasks

---

### Document Integration

- The `createDocument()` method in `document.js` is updated to:
  - Create a new `Header` instance
  - Create `TaskListItem` instances
  - Add the task items to a `TaskList` instance
- The return value of `createDocument()` includes the `Header`, `TaskList`, and `TaskListItem` instances

---

## 💡 Helpful Hints

- How can inheritance be implemented between classes?
- How can Jest’s `toThrow()` matcher be used to test for errors?

---

## 🎯 Goal
By the end of this project, you should be comfortable designing class hierarchies, writing unit tests for each class, and assembling them into a working HTML document generator.

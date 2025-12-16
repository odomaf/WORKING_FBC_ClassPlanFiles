# Create Objects Using Class Constructors

## Overview

In this activity, you will practice Object-Oriented Programming (OOP) using modern JavaScript class syntax.

You will define two related classes and use them together to model how real applications organize data and behavior.

---

## User Story

As a developer, I want to create objects using class constructors so I can model structured data with shared behavior.

---

## Acceptance Criteria

Your work is complete when:

- A class named Post is created.
- Post accepts the following parameters:
  - author
  - title
  - body
  - createdAt
- Post has a property named replies that starts as an empty array.
- Post includes a method named printMeta() that logs:
  Created by AUTHOR on DATE
- Post includes a method named addReply() that adds a reply to the replies array.
- A class named Reply is created.
- Reply accepts the following parameters:
  - author
  - message
  - createdAt
- Reply includes a method named printMeta() that logs:
  Reply from AUTHOR on DATE: "MESSAGE"
- A Reply object is created.
- A Post object is created.
- The Reply is added to the Post using addReply().
- Metadata for both objects is printed to the console.

---

## Hints

- What method runs automatically when a class is instantiated?
- How do methods differ from properties inside a class?
- How can one object store another object inside an array?

---

## Bonus Challenge

Encapsulation is one of the four pillars of Object-Oriented Programming.

Research and explain:

- What encapsulation means
- Why encapsulation is useful
- What is meant by the "state" of an object

---

## Learning Goals

By completing this activity, you will be able to:

- Create classes using ES6 syntax
- Initialize object state with a constructor
- Add methods to classes
- Model relationships between objects
- Describe encapsulation at a high level

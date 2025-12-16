# 🧪 Write a Failing Unit Test

## Overview

In this exercise, you’ll practice writing a **failing unit test** using Jest.

Writing a test that fails first helps you clearly define expected behavior before implementing any logic. This workflow is a key part of **Test-Driven Development (TDD)**.

---

## 🧠 User Story

As a developer, I want to write a test that fails so I can understand what my code should do and confirm that my tests are working correctly.

---

## ✅ Acceptance Criteria

Your solution is complete when:

- Running `npm run test` produces a failing test in the terminal
- Your test creates an instance of the `HandleValidator` class
- Your test calls the `isValid()` method
- Your test passes an empty string (`""`) as input
- Your test asserts that the return value is `false`

---

## 🛠️ What You’re Practicing

- Writing unit tests with Jest
- Instantiating a class inside a test
- Calling a method with test data
- Making assertions with `expect()`
- Following the **Red → Green → Refactor** mindset

---

## 💡 Helpful Hints

- What does Jest’s `expect()` function do?
- Why is it important for a test to fail before writing the correct implementation?

---

## 🏆 Bonus Challenge

Research and compare the following types of tests:

- Unit tests
- Integration tests
- End-to-End (E2E) tests

Be ready to explain how they differ in scope, purpose, and when each is used.

---

## 🎯 Goal

By the end of this activity, you should be comfortable writing a test that fails on purpose — and understanding _why_ that’s a good thing.

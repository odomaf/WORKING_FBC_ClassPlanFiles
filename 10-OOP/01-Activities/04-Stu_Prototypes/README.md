# Adding Shared Behavior with Prototypes

## Overview
In this activity, you will explore how prototype methods allow objects created from the same constructor function to share behavior efficiently.

Instead of defining every method inside the constructor, methods can be added to the constructor’s prototype so they exist only once in memory and are shared by all instances.

---

## User Story
As a developer, I want multiple objects to share the same behavior without duplicating methods in memory.

---

## Acceptance Criteria
Your work is complete when:

- A constructor function named Playlist is defined.
- The constructor sets the following properties:
  - title
  - trackCount
  - isPublic
  - songs (an empty array)
- A method named addSong() is added to the constructor’s prototype.
- The method accepts a song title and adds it to the songs array.
- A new Playlist object is created.
- At least one song is added.
- The updated songs array is logged to the console.

---

## Student Task
In the Unsolved version of this activity, add comments that explain:

- What the constructor function does.
- Why the songs array is created inside the constructor.
- Why addSong() is attached to the prototype.
- What happens when addSong() is called.

Use clear, beginner-friendly language in your explanations.

---

## Documentation
Review the following MDN documentation for reference:

Constructors and the Prototype Chain  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#constructors

---

## Bonus Challenge
Discuss with your partner:

What is the difference between defining a method inside the constructor versus defining it on the prototype?

Think about memory usage, shared behavior, and scalability.

---

## Learning Goals
By completing this activity, you will be able to:

- Explain what a prototype is.
- Add shared methods using .prototype.
- Distinguish between instance properties and prototype methods.
- Understand how JavaScript uses the prototype chain.

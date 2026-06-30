# Twice as Old 👨‍👦

A JavaScript solution to the **Twice as Old** coding challenge.

## Challenge

Create a function that determines how many years ago or in how many years the father will be twice as old as his son.

The function receives:

* `dadYearsOld` → the father's current age
* `sonYearsOld` → the son's current age

and returns the result based on their age difference.

## Solution

```javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  while (true) {
    if (dadYearsOld === sonYearsOld * 2) {
      return [dadYearsOld, sonYearsOld];
    } else {
      dadYearsOld = dadYearsOld + 1;
      sonYearsOld = sonYearsOld + 1;
    }
  }
}
```

## Skills Practiced

* JavaScript functions
* Variables and reassignment
* Scope
* Arrays
* `while` loops
* Problem solving
* Debugging

## Documentation

The `LESSONS.md` file contains my learning notes, including:

* How scopes work in JavaScript
* How arrays store multiple values
* Problems I encountered while solving the challenge
* How I debugged and improved my solution

## About

This project is part of my JavaScript learning journey and my programming portfolio.


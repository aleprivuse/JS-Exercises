# Counting Sheep

This repository contains my solution to the **Counting Sheep** JavaScript coding challenge.

## Challenge

Write a function that returns a string counting sheep from `1` up to the given number.

### Example

```javascript
countSheep(3);

// Returns:
"1 sheep...2 sheep...3 sheep..."
```

## Solution

```javascript
var countSheep = function (num) {
  let answer = "";

  for (let i = 1; i <= num; i++) {
    answer += i + " sheep...";
  }

  return answer;
};
```

## Skills Practiced

* JavaScript
* `for` loops
* String concatenation
* Using the `+=` operator
* Debugging
* Problem solving

## Notes

While solving this challenge, I documented the mistakes I made, how I debugged them, and what I learned from the process.

You can find those notes in **`LESSON.md`**.

---

This project is part of my journey learning JavaScript and improving my programming skills.

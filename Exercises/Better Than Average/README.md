# Better Than Average

This repository contains my solution to the **Better Than Average** JavaScript coding challenge.

## Challenge

Write a function that returns `true` if `yourPoints` is greater than the average score of `classPoints`; otherwise, return `false`.

## Solution

```js
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((sum, point) => sum + point, 0) / classPoints.length;
}
```

## Skills Practiced

* JavaScript
* Arrays
* `Array.prototype.reduce()`
* Problem solving
* Debugging

## Notes

I also documented what I learned while solving this challenge in `LESSONS.md`, including mistakes I made and how I fixed them.

---

This project is part of my journey learning JavaScript and improving my programming skills.

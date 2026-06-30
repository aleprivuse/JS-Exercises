# Better Than Average - Lessons Learned

## Problem

I had to create a function that checks if my score is higher than the average score of the class.

The function:

```js
betterThanAverage(classPoints, yourPoints)
```

should return:

- `true` if my score is higher than the class average
- `false` otherwise

---

# My First Mistake: Misunderstanding the Inputs

My first assumption was:

```js
betterThanAverage(classPoints, yourPoints)

classPoints = [2, 4, 8, 10]
yourPoints = [2, 4, 8, 16]
```

I thought both parameters were arrays, so I wrote code that:

1. Looped through the class points
2. Calculated the class average
3. Looped through my points
4. Calculated my average
5. Compared the two averages

The code worked for that idea, but it was solving the wrong problem.

The actual input was:

```js
betterThanAverage(classPoints, yourPoints)

classPoints = [2, 4, 8, 10]
yourPoints = 16
```

`yourPoints` was already a single number.

There was no second array and no second average to calculate.

## Lesson

A correct solution to the wrong problem is still the wrong solution.

Before writing code:

1. Read the function parameters carefully.
2. Check the examples.
3. Understand the data types.
4. Make sure the algorithm matches the requirements.

---

# My Second Mistake: Forgetting Array Methods

After fixing the input problem, I realized the solution could be much shorter.

My first approach was:

```js
let sum = 0;

for(let i = 0; i < classPoints.length; i++){
    sum += classPoints[i];
}
```

This works perfectly.

However, JavaScript already provides tools for common array operations.

Since I needed to turn an array into one value (the total score), `reduce()` was the perfect method.

---

# The Short Solution

```js
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}
```

---

# Understanding reduce()

This:

```js
classPoints.reduce((a, b) => a + b, 0)
```

is the same as:

```js
let sum = 0;

for(let i = 0; i < classPoints.length; i++){
    sum += classPoints[i];
}
```

`reduce()` just hides the loop.

Example:

```js
[2, 3, 4].reduce((total, number) => total + number, 0)
```

Steps:

```
Start: total = 0

0 + 2 = 2
2 + 3 = 5
5 + 4 = 9
```

Result:

```
9
```

Then:

```
9 / 3 = 3
```

The average is calculated.

---

# Array Method Reminder

Before writing a loop, ask:

## forEach()

Use when you want to do something for every element.

```js
array.forEach(item => {
    console.log(item);
});
```

---

## map()

Use when you want to transform every element into a new array.

```js
const doubled = numbers.map(number => number * 2);
```

---

## filter()

Use when you want to keep only certain elements.

```js
const adults = ages.filter(age => age >= 18);
```

---

## reduce()

Use when you want to combine an array into one final value.

Examples:

- sum
- average
- total price
- counting items

```js
const total = numbers.reduce((sum, number) => sum + number, 0);
```

---

# Main Lessons

## 1. Read the requirements first

Do not start coding before understanding the inputs.

A lot of bugs come from assumptions.

---

## 2. Recognize patterns

When you see:

```
Array → One value
```

think:

```
reduce()
```

When you see:

```
Array → New array
```

think:

```
map()
```

When you see:

```
Remove unwanted items
```

think:

```
filter()
```

---

## 3. Longer code is not always worse

My original solution was not bad.

It was actually a good way to understand the problem.

The shorter solution only became obvious after understanding the problem correctly.

---

# Final Thought

The biggest bug was not in the code.

The biggest bug was my assumption about the data.

Programming is not only about writing syntax. It is about correctly understanding the problem before solving it.

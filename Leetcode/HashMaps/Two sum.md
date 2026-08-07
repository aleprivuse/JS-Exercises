# Two Sum - Hash Map Pattern

## Problem

Given an array of numbers and a target number, find the two numbers that add up to the target and return their indexes.

Example:

```js
nums = [2,7,11,15]
target = 9
```

The answer is:

```js
[0,1]
```

because:

```text
nums[0] + nums[1] = 2 + 7 = 9
```

---

# My First Thought

The easiest solution is brute force.

Check every possible pair:

```js
for every number:
    compare it with every other number
```

Example:

```text
2 + 7
2 + 11
2 + 15
7 + 11
7 + 15
11 + 15
```

This works, but it is slow:

```
Time Complexity: O(n²)
```

because we use a loop inside another loop.

---

# Better Solution: Hash Map

## Main Idea

Instead of searching for the pair, search for the missing number.

Example:

```text
target = 9

current number = 2

9 - 2 = 7
```

We need to know:

> "Have I already seen 7?"

If yes, we found the answer.

---

# What does the Hash Map Store?

The map stores:

```
number → index
```

Example:

```js
{
    2: 0,
    7: 1
}
```

Meaning:

```
number 2 is at index 0
number 7 is at index 1
```

We store the index because the problem asks for indexes.

---

# Algorithm Steps

For every number:

1. Get the current number.

```js
let current = nums[i]
```

2. Calculate the number we need.

```js
let needed = target - current
```

3. Check if the needed number exists in the map.

If yes:

```js
return [map[needed], i]
```

4. If it does not exist, save the current number.

```js
map[current] = i
```

---

# Example Walkthrough

Input:

```js
nums = [2,7,11,15]
target = 9
```

Start:

```js
map = {}
```

---

## Step 1

Current:

```text
2
```

Need:

```text
9 - 2 = 7
```

Check:

```text
Is 7 in map?
```

No.

Store:

```text
2 → 0
```

Map:

```js
{
    2:0
}
```

---

## Step 2

Current:

```text
7
```

Need:

```text
9 - 7 = 2
```

Check:

```text
Is 2 in map?
```

Yes.

Map says:

```text
2 → 0
```

Current index:

```text
7 is index 1
```

Return:

```js
[0,1]
```

---

# Important Mistakes I Made

## Mistake 1

I stored the needed number:

Wrong:

```js
map[needed] = i
```

Why?

Because I have not seen the needed number yet.

Example:

```text
current = 2

needed = 7
```

I don't have 7.

I only have 2.

Correct:

```js
map[current] = i
```

---

## Mistake 2

Returning numbers instead of indexes.

Wrong:

```js
return [current, map[needed]]
```

The problem wants:

```text
indexes
```

not:

```text
values
```

Correct:

```js
return [map[needed], i]
```

---

# Final Pattern To Remember

When you see:

> "Find something that matches something you already saw"

Think:

```
Hash Map
```

The pattern:

```
Loop through array

Calculate what you need

Check if you saw it before

Otherwise remember current value
```

---

# Complexity

Time:

```
O(n)
```

We only loop once.

Space:

```
O(n)
```

because we store numbers in the map.

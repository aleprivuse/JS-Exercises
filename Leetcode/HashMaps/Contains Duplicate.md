# Contains Duplicate - Hash Map / Set Pattern

## Problem

Given an array of numbers, return `true` if any number appears more than once.

Example:

```js
nums = [1,2,3,1]
```

Output:

```js
true
```

Because:

```text
1 appears twice
```

---

# First Thought: Brute Force

The simplest solution:

Compare every number with every other number.

Example:

```text
[1,2,3,1]

Compare:
1 with 2
1 with 3
1 with 1 ✅ duplicate
```

This works.

But it is slow:

```text
Time Complexity: O(n²)
```

because we compare many pairs.

---

# Better Solution: Remember What We Saw

The question is:

> "Have I already seen this number?"

This is a perfect hash map / Set problem.

---

# What Does The Map Store?

Unlike Two Sum, we do NOT need indexes.

We only care if the number exists.

So we store:

```text
number → true
```

Example:

```js
{
    5: true,
    2: true,
    8: true
}
```

Meaning:

```text
I have already seen 5, 2, and 8.
```

---

# Algorithm

For every number:

1. Get the current number.

```js
let current = nums[i]
```

2. Check if it already exists.

```js
if(map[current] !== undefined)
```

If yes:

```js
return true
```

because we found a duplicate.

3. Otherwise remember it.

```js
map[current] = true
```

4. If the loop finishes:

```js
return false
```

because no duplicate was found.

---

# Example Walkthrough

Input:

```js
nums = [1,2,3,1]
```

Start:

```js
map = {}
```

---

## First number

Current:

```text
1
```

Check:

```text
Is 1 in map?
```

No.

Store:

```text
1 → true
```

Map:

```js
{
    1:true
}
```

---

## Second number

Current:

```text
2
```

Check:

```text
Is 2 in map?
```

No.

Store:

```text
2 → true
```

Map:

```js
{
    1:true,
    2:true
}
```

---

## Third number

Current:

```text
3
```

Store:

```js
{
    1:true,
    2:true,
    3:true
}
```

---

## Fourth number

Current:

```text
1
```

Check:

```text
Is 1 in map?
```

YES.

Return:

```js
true
```

---

# My Mistakes While Learning

## Mistake 1: Thinking like Two Sum

I tried:

```js
map[number] = index
```

But this problem does not need indexes.

Two Sum:

```text
number → index
```

because we need the location.

Contains Duplicate:

```text
number → true
```

because we only need existence.

---

## Mistake 2: Confusing key and value

A hash map always has:

```text
key → value
```

Example:

```js
map[5] = true
```

Means:

```text
key: 5
value: true
```

The number is the key.

The `true` is just information.

---

# Using Set Instead

JavaScript has a data structure made exactly for this:

```js
const seen = new Set()
```

A Set only stores values.

Example:

```js
seen.add(5)
```

Check:

```js
seen.has(5)
```

For this problem, Set is often cleaner because we only care:

> "Have I seen this value?"

---

# Difference Between Two Sum and Contains Duplicate

## Two Sum

Question:

> "Have I seen the number I need?"

Store:

```text
number → index
```

Example:

```js
{
  7:1
}
```

---

## Contains Duplicate

Question:

> "Have I seen this number before?"

Store:

```text
number → true
```

Example:

```js
{
  7:true
}
```

---

# Final Pattern To Remember

When you see:

> "Have I seen this before?"

Think:

```text
Hash Map / Set
```

Pattern:

```text
Loop through array

Check if value exists

If yes:
    duplicate found

If no:
    remember value
```

---

# Complexity

Time:

```text
O(n)
```

We only go through the array once.

Space:

```text
O(n)
```

because we store seen numbers.

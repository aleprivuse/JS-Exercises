# Majority Element (Hash Map - Frequency Counting)

## Problem

Given an array `nums`, return the element that appears more than `⌊n / 2⌋` times.

The majority element is guaranteed to exist.

Example:

```js
Input:
[2,2,1,1,1,2,2]

Output:
2
```

---

# Thought Process

The first question:

> What information do I need to remember?

I need to know:

- Which numbers appeared
- How many times each number appeared

A Hash Map is perfect for storing this information.

Pattern:

```
number → count
```

Example:

```js
{
    2: 4,
    1: 3
}
```

Meaning:

```
2 appears 4 times
1 appears 3 times
```

---

# Step 1: Build the Frequency Map

Start with an empty object:

```js
let map = {}
```

Loop through the array:

```js
for(let i = 0; i < nums.length; i++){
    let currentNumber = nums[i]

    if(map[currentNumber] !== undefined){
        map[currentNumber] = map[currentNumber] + 1
    }
    else{
        map[currentNumber] = 1
    }
}
```

Example:

Input:

```js
[2,2,1,1,1,2,2]
```

After the loop:

```js
{
    2: 4,
    1: 3
}
```

---

# Step 2: Find the Highest Frequency

Now we need to find:

- The biggest count
- Which number has that count

Create two variables:

```js
let maxNumber = 0
let majority = 0
```

`maxNumber` stores the highest amount of appearances.

`majority` stores the number with that amount.

---

# Loop Through The Hash Map

To loop through an object:

```js
for(let key in map){

}
```

Important:

The `key` is the number.

The value is the count.

Example:

```js
{
    2: 4
}
```

Inside the loop:

```js
key = "2"

map[key] = 4
```

Remember:

Object keys are strings, so convert them:

```js
Number(key)
```

---

# Compare Counts

Inside the loop:

```js
let count = map[key]

if(count > maxNumber){
    maxNumber = count
    majority = Number(key)
}
```

Example:

First:

```
key = 2
count = 4
```

Since:

```
4 > 0
```

Update:

```
maxNumber = 4
majority = 2
```

Next:

```
key = 1
count = 3
```

Since:

```
3 > 4 ❌
```

Do nothing.

---

# Final Solution

```js
var majorityElement = function(nums) {
    let map = {}

    for(let i = 0; i < nums.length; i++){
        let currentNumber = nums[i]

        if(map[currentNumber] !== undefined){
            map[currentNumber] = map[currentNumber] + 1
        }
        else{
            map[currentNumber] = 1
        }
    }

    let maxNumber = 0
    let majority = 0

    for(let key in map){
        let count = map[key]

        if(count > maxNumber){
            maxNumber = count
            majority = Number(key)
        }
    }

    return majority
};
```

---

# Complexity

## Time Complexity

Building the map:

```
O(n)
```

Checking the map:

```
O(k)
```

`k` = number of unique numbers.

Overall:

```
O(n)
```

---

## Space Complexity

The hash map stores every unique number.

Worst case:

```
O(n)
```

---

# What I Learned

## Hash Map Pattern

When a problem asks:

- How many times did something appear?
- Did I see this before?
- What value belongs to this information?

Think:

```
Hash Map
```

---

# Hash Map Patterns Learned

| Problem | Map Stores |
|---|---|
| Two Sum | number → index |
| Contains Duplicate | number → true |
| Valid Anagram | character → count |
| Majority Element | number → count |

---

# Main Lesson

Before coding, ask:

```
What information do I need to remember?
```

The answer tells you what your Hash Map should store.

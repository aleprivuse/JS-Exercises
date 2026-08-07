# Valid Anagram - Hash Map Frequency Pattern

## Problem

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`.

An anagram means:

* Both strings contain the same letters.
* Each letter appears the same amount of times.
* The order does not matter.

Example:

```js
s = "anagram"
t = "nagaram"
```

Output:

```js
true
```

Because both contain:

```text
a → 3
n → 1
g → 1
r → 1
m → 1
```

---

# First Thought

A possible idea:

> "Give every letter a number and compare them."

Example:

```text
a = 1
b = 2
c = 3
```

Then convert the strings.

The problem:

* We still need to count duplicates.
* The order of letters does not matter.
* It creates unnecessary extra work.

The real question is:

> "How many times does each letter appear?"

---

# Hash Map Idea

A hash map can store:

```text
letter → count
```

Example:

String:

```js
"hello"
```

Becomes:

```js
{
    h: 1,
    e: 1,
    l: 2,
    o: 1
}
```

The key is the letter.

The value is how many times we saw it.

---

# Creating The Frequency Map

Start:

```js
let map = {};
```

For every character:

1. Check if it already exists.
2. If yes, increase the count.
3. If no, create it with value 1.

Example:

```text
banana
```

---

First character:

```text
b
```

Not in map:

```js
map["b"] = 1;
```

Map:

```text
b → 1
```

---

Next:

```text
a
```

Create:

```text
a → 1
```

---

Next:

```text
n
```

Create:

```text
n → 1
```

---

Next:

```text
a
```

Already exists:

```text
a → 1
```

Increase:

```text
a → 2
```

Final:

```text
{
    b:1,
    a:3,
    n:2
}
```

---

# Increasing Values

The pattern:

```js
if (map[letter]) {
    map[letter]++;
}
else {
    map[letter] = 1;
}
```

Meaning:

If I have seen it:

```text
add one
```

If I have not:

```text
start counting
```

---

# Comparing Two Maps

JavaScript cannot compare objects like this:

```js
map1 === map2
```

because objects are compared by reference, not content.

Example:

```js
{
 a:1
}
```

and:

```js
{
 a:1
}
```

are different objects.

---

Instead:

## Step 1: Compare amount of keys

```js
Object.keys(mapS).length
```

`Object.keys()` gives an array of all keys.

Example:

```js
Object.keys({
    a:3,
    b:1
})
```

returns:

```js
["a","b"]
```

Then:

```js
.length
```

returns:

```text
2
```

---

## Step 2: Compare every key

Loop through the map:

```js
for (let key in mapS)
```

This means:

> "Give me every key inside mapS."

Example:

```js
mapS = {
    a:3,
    n:1
}
```

The loop gives:

```text
key = "a"
key = "n"
```

Then:

```js
mapS[key]
```

gets the value.

Example:

```js
mapS["a"]
```

returns:

```text
3
```

---

Comparison:

```js
if (mapS[key] !== mapT[key]) {
    return false;
}
```

Meaning:

> "If the amount of this letter is different, they are not anagrams."

---

# Important Mistakes

## Mistake 1: Confusing key and value

Example:

```js
map["a"] = 3;
```

Means:

```text
key:
"a"

value:
3
```

The letter is the key.

The count is the value.

---

## Mistake 2: Trying to compare objects directly

Wrong:

```js
mapS === mapT
```

Correct:

Compare their keys and values manually.

---

# Hash Map Patterns Learned

After these three problems:

## Two Sum

Question:

> "Have I seen the number I need?"

Store:

```text
number → index
```

---

## Contains Duplicate

Question:

> "Have I seen this before?"

Store:

```text
number → true
```

---

## Valid Anagram

Question:

> "How many times did I see this?"

Store:

```text
letter → count
```

---

# The Main Lesson

When using a hash map, first ask:

> "What information do I need to remember?"

Possible answers:

| Problem        | Store         |
| -------------- | ------------- |
| Need location  | value → index |
| Need existence | value → true  |
| Need amount    | value → count |

---

# Complexity

Time:

```text
O(n)
```

We go through the strings once.

Space:

```text
O(n)
```

because we store the letters and their counts.

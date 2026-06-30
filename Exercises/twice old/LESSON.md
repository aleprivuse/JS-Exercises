# Twice as old
## What I learned
### Scopes
Here I relearned what scopes are in JS and how they work. Here is my explanation: think of it like a room full of people (variables) that are talking to each other. Now imagine that you are in another room talking to your friends - do you think that you know what the people in the other room are talking about? Exactly, you don't know because you weren't there. Now imagine that somebody brings a stereo and starts talking - you would hear it even if you were not in the same room. That is the concept of scopes.

---
### Arrays
Here, as you can see, I used `[]` in the last part of my code. You might think - what does that do? Simply, it can store and return more than one variable. So you want to use that to store/return more values without creating more variables.

---
## The Problems
### Problem 1
The first version of my problem is I wanted to add a number to the variable without saving it in the function as you can see below:

```javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  while(true){
    if(dadYearsOld == sonYearsOld * 2){
      return dadYearsOld, sonYearsOld
      false
    }
    else{
      dadYearsOld++
      sonYearsOld++
    }
  }
}
```

***Solution:*** The problem is that it still added +1 but it was not stored anywhere so it just went away. My fix was to still call the variable and save the +1 back into it.

---

### Problem 2
I created a new variable for storing the value as you can see here:

```javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  while(true){
    if(dadYearsOld == sonYearsOld * 2){
      return dadYearsOld, sonYearsOld
      false
    }
    else{
      let newDadYears = dadYearsOld++
      let newSonYears = sonYearsOld++
    }
  }
}
```

The problem is that if you run that, the if/else code doesn't recognise the new variable - it still sees the old ones, `dadYearsOld` and `sonYearsOld`, and not the new variable.

***Solution:*** just use the same variable but change its value like this:

```javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  while(true){
    if(dadYearsOld == sonYearsOld * 2){
      return [dadYearsOld, sonYearsOld]
    }
    else{
      dadYearsOld = dadYearsOld + 1
      sonYearsOld = sonYearsOld + 1
    }
  }
}
console.log(twiceAsOld(15, 3))
```
> **Note:** For the logic/math solution check: `twiceAsOld-solution.js`

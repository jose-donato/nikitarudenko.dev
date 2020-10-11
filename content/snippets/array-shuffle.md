---
tags:
  - algorithm
title: Array Shuffle
excerpt: Based on Fisher–Yates shuffle algorithm
---

Sometimes you might need to shuffle an array. This utility shuffle function is based on the effective Fisher–Yates shuffle algorithm.
Learn how it works in [this video](https://www.youtube.com/watch?v=tLxBwSL3lPQ).

```javascript
function shuffle(arr) {
  const array = [...arr] // Consider a use of deep copy
  const lastIndex = array.length - 1

  // Start from the last element and swap one by one.
  for (let index = lastIndex; index > 0; index--) {
    // 1. Pick a random index among lower ones
    const randomIndex = Math.floor(Math.random() * (index + 1))
    // 2. Swap elements
    ;[array[index], array[randomIndex]] = [array[randomIndex], array[index]]
  }

  return array
}
```

And here is the [Lodash implementation](https://github.com/lodash/lodash/blob/ddfd9b11a0126db2302cb70ec9973b66baec0975/lodash.js#L6711) that uses a `while`-loop:

```javascript
function shuffleSelf(array, size) {
  var index = -1,
    length = array.length,
    lastIndex = length - 1

  size = size === undefined ? length : size
  while (++index < size) {
    var rand = baseRandom(index, lastIndex),
      value = array[rand]

    array[rand] = array[index]
    array[index] = value
  }
  array.length = size
  return array
}
```

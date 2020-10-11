---
tags:
- algorithm
title: Array Shuffle
excerpt: Based on Fisher–Yates shuffle algorithm

---
    function shuffle(arr) {
      // Consider a use of deep copy
      const array = [...arr];
      const lastElIndex = array.length - 1;
    
      // Start from the last element and swap one by one.
      for (let index = lastElIndex; index > 0; index--) {
        // 1. Pick a random index among lower ones
        const randomIndex = Math.floor(Math.random() * (index + 1));
        // 2. Swap elements
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
      }
    
      return array;
    }
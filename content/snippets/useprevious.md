---
tags:
  - hooks
name: usePrevious
title: usePrevious
excerpt: Access previous value with ease
---

After switching to hooks, I wondered how to get value from the last render. In class component's __componentDidUpdate__, we can access __prevState__ and __prevProps__. In a hooks-based component, for this purpose we can utilize __useRef__ hook and then access __ref.current__. This utility hook will be useful in any modern React codebase.

```jsx
function usePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
```

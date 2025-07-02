# 🔵 React Interview Questions (Top 25 with Answers)

---

## 1. What are React Hooks?

**Answer:** Hooks are functions that let you use state and other React features in functional components. Common hooks include `useState`, `useEffect`, `useContext`, `useReducer`, etc.

---

## 2. What is the Virtual DOM?

**Answer:** The Virtual DOM is a lightweight JavaScript object that is a copy of the real DOM. React uses it to detect changes and update only the necessary parts, improving performance.

---

## 3. Explain useState and useEffect.

**Answer:**

- `useState` lets you add state in functional components.
- `useEffect` performs side effects (e.g., data fetching, subscriptions) after render.

---

## 4. What is JSX?

**Answer:** JSX is a syntax extension that allows mixing HTML with JavaScript. It's compiled to `React.createElement()` calls.

---

## 5. How does the React rendering lifecycle work?

**Answer:** React renders components, compares virtual DOMs (diffing), and updates the real DOM using a reconciliation process.

---

## 6. What is prop drilling?

**Answer:** Prop drilling is the process of passing props through multiple components, which can be avoided using `useContext` or state management tools like Redux.

---

## 7. What is useContext?

**Answer:** `useContext` is a hook that allows consuming a context value without passing props down manually at every level.

---

## 8. Difference between class and functional components?

**Answer:**

- Class components use `this` and lifecycle methods.
- Functional components use hooks and are simpler/more modern.

---

## 9. How to optimize performance in React?

**Answer:** Use `React.memo`, `useMemo`, `useCallback`, code splitting, lazy loading, and avoiding unnecessary re-renders.

---

## 10. What is memoization in React?

**Answer:** Memoization stores the result of expensive function calls and returns the cached result when the same inputs occur (e.g., `React.memo`, `useMemo`).

---

## 11. What are controlled and uncontrolled components?

**Answer:**

- Controlled: form data is handled by React state.
- Uncontrolled: form data is handled by the DOM.

---

## 12. What are keys in React?

**Answer:** Keys help React identify which items have changed in lists. They must be unique and stable for each element.

---

## 13. What is React Router?

**Answer:** A routing library for React to handle dynamic routing, navigation, and URL matching.

---

## 14. How does useRef work?

**Answer:** `useRef` creates a persistent reference that doesn’t trigger re-renders. It’s often used to access DOM nodes.

---

## 15. What is useCallback?

**Answer:** `useCallback` memoizes functions to prevent unnecessary re-creations on re-renders.

---

## 16. What is useMemo?

**Answer:** `useMemo` memoizes computed values, improving performance by recalculating only when dependencies change.

---

## 17. Explain lifecycle methods in class components.

**Answer:**

- `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, etc., are used to hook into component lifecycle events.

---

## 18. What are higher-order components?

**Answer:** Functions that take a component and return a new component with enhanced behavior (e.g., authentication wrappers).

---

## 19. What is reconciliation?

**Answer:** It’s the diffing algorithm React uses to update the DOM efficiently by comparing the virtual DOM with a previous version.

---

## 20. State vs Props?

**Answer:**

- State is internal and mutable.
- Props are external and passed down from parent to child.

---

## 21. How to handle forms in React?

**Answer:** Use controlled components and `onChange` handlers to track input changes via React state.

---

## 22. What is Redux?

**Answer:** A state management library to manage global application state using actions, reducers, and stores.

---

## 23. What are React Portals?

**Answer:** Portals let you render children into a DOM node outside the parent component hierarchy.

---

## 24. Explain Error Boundaries.

**Answer:** Error boundaries catch JavaScript errors in child components and display fallback UI instead of crashing the app.

---

## 25. What is Concurrent Mode?

**Answer:** An experimental React feature that allows rendering multiple tasks simultaneously for smoother user experiences.

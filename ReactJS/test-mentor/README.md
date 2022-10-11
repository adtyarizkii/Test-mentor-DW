## State

File: `pages/UseState.js`

- Init useState

  ```jsx
  const [counter, setCounter] = useState(0);
  ```

- Function for Handle Increment

  ```jsx
  const Add = () => {
    setCounter(counter + 1);
  };
  ```

- Function for Handle Decrement

  ```jsx
  const Less = () => {
    setCounter(counter - 1);
  };
  ```

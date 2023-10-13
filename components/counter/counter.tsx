import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2 data-testid="count">{count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        + plus
      </button>
    </>
  );
};

export default Counter;

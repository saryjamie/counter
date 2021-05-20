import React, { useState, useCounter } from "react";

// in order to use React Hooks we should always stat with -use- keyword

const useCounter = (counterUpdateFn) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counterUpdateFn);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return counter;
};
export default useCounter;

import { useState, useCounter } from "react";

// in order to use React Hooks we should always stat with -use- keyword

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return counter;
};
export default useCounter;

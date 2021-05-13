import { useState, useCounter } from "react";

// using the keyword "use" is a MUST in order to use react hooks
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

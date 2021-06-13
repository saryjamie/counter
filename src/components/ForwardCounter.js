import React from "react";

import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter();
  return <Card>{counter}</Card>;
  console.log("testing...");
};
export default ForwardCounter;

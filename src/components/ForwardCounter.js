import React from "react";

import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = (props) => {
  const counter = useCounter();
  return <Card>{counter}</Card>;
};
export default ForwardCounter;

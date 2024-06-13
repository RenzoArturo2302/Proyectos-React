import { count } from "firebase/firestore";
import React, { useState, useEffect } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const change = () => {
    setCounter(counter + 1);
  };

  return { counter, change };
};

export default useCounter;

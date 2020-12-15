import React from "react";
export default (initialVal) => {
  const [val, setVal] = React.useState(initialVal);
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const reset = () => {
    setVal("");
  };
  return [val, handleChange, reset];
};

export default function todoList(initialVal) {
  const [state, setStete] = React.useState(initialVal);
  const handleChange = (e) => {
    setState(e.target.value);
  };
  return { state, handleChange };
}

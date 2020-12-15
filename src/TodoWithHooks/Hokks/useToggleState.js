import React from "react";

function useToggle(initialVal = false) {
  const [value, setValue] = React.useState(initialVal);
  console.log(value);
  const toggle = () => {
    setValue(!value);
  };
  return [value, toggle];
}

export {useToggle,substra};

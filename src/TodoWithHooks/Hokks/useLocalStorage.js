import React, { useEffect, useState } from "react";

export default function useLocalStorage(key, initialVal) {
  const [state, setState] = useState(() => {
    let val;
    val = JSON.parse(window.localStorage.getItem(key || String(initialVal)));
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);
  return [state, setState];
}

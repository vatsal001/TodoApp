import React from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./Hokks/useInputState";
export default function EditTodo({ id, editTodo, todo, toggle }) {
  const [value, handleChange, reset] = useInputState(todo);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        toggle();
      }}
    >
      <TextField value={value} onChange={handleChange} />
    </form>
  );
}

//Use ReduxForm in this for practice

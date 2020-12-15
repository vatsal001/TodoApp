import React from "react";
import useInputState from "./Hokks/useInputState";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
// import useToggleState from "./Hokks/useToggleState";
import useToggleState from "./Hokks/useToggleState";
function TodoForm({ addTodo, editTodo, todos }) {
  const [value, handleChange, reset] = useInputState("");
  const [isEditing, toggle] = useToggleState();
  return (
    <Paper>
      {isEditing ? (
        // <form
        //   onSubmit={(e) => {
        //     e.preventDefault();
        //     let id = (id) => todos.find((c) => c.id === id);
        //     editTodo(id(), value);
        //     reset();
        //   }}
        // >
        //   <TextField
        //     value={value}
        //     onChange={handleChange}
        //     fullWidth
        //     label="Edit  todo!"
        //   />
        // </form>
        <h1>hello</h1>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTodo(value);
            reset();
          }}
        >
          <TextField
            value={value}
            onChange={handleChange}
            fullWidth
            label="Add new todo!"
          />
        </form>
      )}
    </Paper>
  );
}

export default TodoForm;

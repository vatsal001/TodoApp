import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoCRUD from "./Hokks/useTodoCRUD";
import useLocalStorage from "./Hokks/useLocalStorage";
import uuid from "uuid/dist/v4";
function TodoApp() {
  const initialTodos = [{ id: uuid(), todo: "pet my dog", complete: false }];
  const { todos, addTodo, deleteTodo, editTodo, toggleTodo } = useTodoCRUD(
    initialTodos
  );

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS APP WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      {/* <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4} />
      </Grid> */}
      <TodoForm addTodo={addTodo} editTodo={editTodo} todos={todos} />
      <TodoList todo={todos} removeTodo={deleteTodo} toggleTodo={toggleTodo} />
    </Paper>
  );
}

export default TodoApp;

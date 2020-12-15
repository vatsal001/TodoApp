import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Todo from "./Todo";

function TodoList({ todo, removeTodo, toggleTodo }) {
  return (
    <Paper>
      <List>
        {todo.map((t) => (
          <Todo
            key={t.id}
            id={t.id}
            todo={t.todo}
            completed={t.complete}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            // editTodo={editTodo}
          />
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;

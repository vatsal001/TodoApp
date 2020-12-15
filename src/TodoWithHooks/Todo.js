import React from "react";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import useToggleState from "./Hokks/useToggleState";
import EditTodo from "./EditTodo";

function Todo({ todo, completed, removeTodo, id, toggleTodo }) {
  const [isEditing, toggle] = useToggleState();

  return (
    <>
      <ListItem>
        {/* {isEditing ? (
          <EditTodo id={id} todo={todo} toggle={toggle} />
        ) : ( */}
        <>
          <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {todo}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={toggle}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      </ListItem>
      <Divider />
    </>
  );
}

export default Todo;

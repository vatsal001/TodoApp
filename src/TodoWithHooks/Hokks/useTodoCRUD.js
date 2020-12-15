import uuid from "uuid/dist/v4";
import useLocalStorage from "./useLocalStorage";
export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorage("todos", initialTodos);
  return {
    todos,
    addTodo: (newTodo) => {
      setTodos([...todos, { id: uuid(), todo: newTodo, complete: false }]);
    },
    deleteTodo: (todoId) => {
      let updateTodo = todos.filter((t) => t.id !== todoId);
      setTodos(updateTodo);
    },
    editTodo: (todoId, newTodo) => {
      let updateTodo = todos.map((t) =>
        t.id === todoId ? { ...t, todo: newTodo } : t
      );
      setTodos(updateTodo);
    },
    toggleTodo: (todoId) => {
      let updateTodo = todos.map((t) =>
        t.id === todoId ? { ...t, complete: !t.complete } : t
      );
      setTodos(updateTodo);
    },
  };
};

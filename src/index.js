import "./css/styles.css";
import { Todo, TodoList } from "./classes";
import { crearTodHtml } from "./js/componentes";

export const todoList = new TodoList();

todoList.todos.forEach((todo) => {
  crearTodHtml(todo);
});

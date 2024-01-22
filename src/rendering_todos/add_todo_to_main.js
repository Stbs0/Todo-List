import fetchTodoItems from "./fetch_input";
import CreateToDo from "../todo_minipulation/create/create";

export default function renderTodoToMain() {
  const project = document.querySelectorAll(".project");
  project.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target;
    });
  });
}

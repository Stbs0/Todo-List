import dueDate from "./todo_minipulation/setting_due_date";
import CreateToDo from "./todo_minipulation/Todo-creator";
import addNewProject from "./rendering_todos/add-new-list";
import "./style.css";
addNewProject("home", "Cook meat");
addNewProject("work", "Cook meat");
console.log(dueDate("2024, 1, 18"));
const time = dueDate("2024, 1, 18");
const Cock = new CreateToDo(
  "Cock Dinner",
  "make food with mom",
  time,
  "high",
  "non",
  "checked"
);
console.log(Cock);

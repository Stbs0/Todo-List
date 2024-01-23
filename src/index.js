import "./style.css";

// import ToDo, { CheckList, Note } from "./todo_minipulation/create";
import updateScreen from "./todo_minipulation/addInput";
import addNewProject from "./rendering_todos/add-new-list";
// const todo = new ToDo("cock", "hbhhjvhjv");
// console.log(todo.checklist);
// const clean = new CheckList("clean spoon", "high", false);
// todo.addChecklist(clean);
// console.log(todo.checklist);
// const eat = new CheckList("eat", "low", true);
// todo.addChecklist(eat);
// console.log(todo.checklist);
const projectBtn = addNewProject();
projectBtn.addNewProjectName();

import { formatDistanceToNow, format } from "date-fns";

export default class ToDo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.date = format(new Date(), "dd/MM/yyyy");
    this.checklist = [];
    this.note = [];
  }

  dueDate(time) {
    const result = formatDistanceToNow(new Date(time));
    return result;
  }
  removeChecklist(index) {
    this.checklist.splice(index, 1);
  }
  addChecklist(newChecklist) {
    this.checklist.push(newChecklist);
  }
  removeNote(index) {
    this.note.splice(index, 1);
  }
  addNote(newNote) {
    this.note.push(newNote);
  }
}
export class CheckList {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
    this.time = format(new Date(), "dd/MM/yyyy");

    this.finished = false;
  }
  changePriority(priority) {
    this.priority = priority;
  }
  changeName(name) {
    this.name = name;
  }
  changeTime(time) {
    this.time = time;
  }
  toggleFinished() {
    this.finished = !this.finished;
  }
}
export class Note {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.time = format(new Date(), "dd/MM/yyyy");
  }
  changeTitle(title) {
    this.title = title;
  }
  changeContent(content) {
    this.content = content;
  }
}
export class Project {
  constructor(name) {
    this.name = name;
    this.toDoList = [];
  }
  addTodo(todo) {
    this.toDoList.push(todo);
  }
  removeTodo(index) {
    this.toDoList.splice(index, 1);
  }
}

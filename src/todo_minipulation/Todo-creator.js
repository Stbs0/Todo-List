import dueDate from "./setting_due_date";
import { formatDistanceToNow } from "date-fns";
export default class CreateToDo {
  constructor(title, description, date, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
  dueDate() {
    return (this.date = formatDistanceToNow(new Date(this.date)));
  }
}

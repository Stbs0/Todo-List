import { formatDistanceToNow, format } from "date-fns";

class date {
  dueDate(time) {
    const result = formatDistanceToNow(new Date(time));
    return result;
  }
}
export class CreateToDo extends date {
  constructor(title, description) {
    super();
    this.title = title;
    this.description = description;
    this.date = format(new Date(), "dd/MM/yyyy");
    this.checklist = [];
    this.note = [];
  }
}
export class CreateCheckList extends date {
  constructor(name, time, priority) {
    super();
    this.name = name;
    this.time = time;
    this.priority = priority;
  }
}

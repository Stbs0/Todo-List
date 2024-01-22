import { CreateToDo } from "../create/create";
export default function feedtodo(title, description) {
  return new CreateToDo(title, description);
}

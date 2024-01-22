import { CreateCheckList } from "../create/create";
export default function feedChicklist(name, date, priority) {
  return new CreateCheckList(name, date, priority);
}

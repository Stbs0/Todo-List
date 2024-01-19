import { formatDistanceToNow } from "date-fns";
export default function dueDate(time) {
  const result = formatDistanceToNow(new Date(time));
  return result;
}

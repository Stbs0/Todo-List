import createTodo from "./fetch_input";
export default function showDialog() {
  const dialog = document.querySelector(".dialog");
  const showBtn = document.querySelector(".addbtn");
  const closeDialog = document.querySelector(".close");

  showBtn.addEventListener("click", () => dialog.showModal());
  closeDialog.addEventListener("click", () => dialog.close());
  const confirm = document.querySelector(".create-todo");
  confirm.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(createTodo());
    dialog.close();
  });
}

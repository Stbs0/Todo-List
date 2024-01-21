import dueDate from "../todo_minipulation/setting_due_date";

export default function fetchTodoItems() {
  const projectNameInp = document.querySelector("#name");
  const descriptionInp = document.querySelector("#discription");
  const dateInp = document.querySelector("#date");
  const radioValue = document.querySelectorAll('input[name="size"]');
  console.log(dateInp);
  const checkedRadio = radioValue.forEach((btn) => {
    let result;
    if (btn.checked) {
      result = btn.value;
      return result;
    }
  });
  //   const mediumInp = document.querySelector("#meduim");
  //   const highInp = document.querySelector("#high");

  const newDate = dueDate(dateInp.value);

  return { projectNameInp, descriptionInp, newDate, checkedRadio };
}

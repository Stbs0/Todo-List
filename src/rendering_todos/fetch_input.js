export default function fetchTodoItems() {
  const projectNameInp = document.querySelector("#name");
  const descriptionInp = document.querySelector("#discription");
  const dateInp = document.querySelector("#date");
  const radioValue = document.querySelectorAll('input[name="size"]');

  const checkedRadio = radioValue.forEach((btn) => {
    let result;
    if (btn.checked) {
      result = btn.value;
      return result;
    }
  });
  //   const mediumInp = document.querySelector("#meduim");
  //   const highInp = document.querySelector("#high");

  return { projectNameInp, descriptionInp, dateInp, checkedRadio };
}

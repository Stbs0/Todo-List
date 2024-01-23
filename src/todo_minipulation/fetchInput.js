import addNewProject from "../rendering_todos/add-new-list";
export default function addProject() {
  let inputValue;
  const addProjectBtn = document.querySelector(".add-project");
  addProjectBtn.addEventListener("click", () => {
    const addBtn = addNewProject();

    const inpt = document.createElement("input");
    addProjectBtn.append(inpt);
    inpt.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        inputValue = inpt.value;
        inpt.remove();
      }
    });
  });
  return inputValue;
}

export default function addNewProject() {
  let count = 0;
  const projectContainer = document.querySelector(".projects-container");
  // Function to add a new project name
  function addNewProjectName() {
    count += 1;
    function addProject() {
      let inputValue;
      const addProjectBtn = document.querySelector(".add-project");
      const addProjectContainer = document.querySelector(
        ".add-project-container"
      );
      addProjectBtn.addEventListener(
        "click",
        () => {
          const addBtn = addNewProject();

          const inpt = document.createElement("input");
          addProjectContainer.append(inpt);
          inpt.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              inputValue = inpt.value;
              inpt.remove();
            }
          });
        },
        "once"
      );
      return inputValue;
    }
    const projectNameInput = addProject();

    // Create a new project div
    const project = document.createElement("div");
    project.classList.add("project");
    projectContainer.appendChild(project);

    // Create a button for the project name
    const projectName = document.createElement("h2");
    projectName.classList.add("project-name");
    projectName.innerHTML = `<i class="fa-solid fa-layer-group"></i> <span class="project-name-text">${projectNameInput}</span>`;

    // Append the project name button to the project div
    project.appendChild(projectName);

    // Create an unordered list for todos
    const unorderList = document.createElement("ul");
    unorderList.classList.add(`item${count}`);

    // Append the unordered list to the project div
    project.appendChild(unorderList);
  }

  // Function to add a new todo
  function addNewTodo(nameTodo, projectNumber) {
    const unorderList = document.querySelector(`.item${projectNumber}`);

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    unorderList.appendChild(listItem);

    // Create a button for the todo name
    const todoName = document.createElement("button");
    todoName.src = "#";
    todoName.classList.add("todo-name");

    // Add a bar icon and the todo name to the button
    todoName.innerHTML = `<i class="fa-solid fa-bars"></i> <span class="todo-name-text">${nameTodo}</span>`;

    // Append the todo name button to the list item
    listItem.appendChild(todoName);
  }
  // addNewProjectName("home");
  // addNewProjectName("work");
  // addNewTodo("clean the house", 1);
  // addNewTodo("do the laundry", 1);
  // addNewTodo("finish the project", 2);
  // addNewTodo("send the email", 2);
  // Return the functions for adding new project names and todos
  return { addNewProjectName, addNewTodo };
}

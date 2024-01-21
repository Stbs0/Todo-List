export default function addNewProject() {
  let count = 0;
  const projectContainer = document.querySelector(".projects-container");
  // Function to add a new project name
  function addNewProjectName(nameProject) {
    count += 1;

    // Create a new project div
    const project = document.createElement("div");
    project.classList.add("project");
    projectContainer.appendChild(project);

    // Create a button for the project name
    const projectName = document.createElement("button");
    projectName.classList.add("project-name");
    projectName.innerHTML = `<i class="fa-solid fa-layer-group"></i> <span class="project-name-text">${nameProject}</span>`;

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

  // Return the functions for adding new project names and todos
  return { addNewProjectName, addNewTodo };
}

export default function addNewProject(nameProject, nameTodo) {
  const projectContainer = document.querySelector(".projects-container");

  const project = document.createElement("div");
  project.classList.add("project");
  project.innerHTML = '<i class="fa-solid fa-layer-group fa-lg"></i>';
  projectContainer.appendChild(project);
  //
  const projectName = document.createElement("h3");
  projectName.classList.add("todo-name");
  projectName.textContent = `${nameProject}`;

  project.appendChild(projectName);
  //

  const unorderList = document.createElement("ul");
  unorderList.classList.add("item");
  project.appendChild(unorderList);
  //
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  unorderList.appendChild(listItem);
  const todoName = document.createElement("a");
  todoName.src = "#";
  todoName.textContent = `${nameTodo}`;

  // todoName.classList.add(`${nameTodo}`); the problem is the space between to word must add a hyphen
  listItem.appendChild(todoName);

  //
}

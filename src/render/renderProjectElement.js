export default function renderProject({ name }) {
  const projectContainer = document.querySelector(".projects-container");

  const project = document.createElement("div");
  project.classList.add("project");
  projectContainer.appendChild(project);

  const projectNameContainer = document.createElement("h2");
  projectNameContainer.classList.add("project-name");
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-layer-group";
  const projectName = document.createElement("span");
  projectName.className = "project-name-text";
  projectName.textContent = name;

  projectNameContainer.append(icon, projectName);

  project.appendChild(projectNameContainer);

  const unorderList = document.createElement("ul");

  project.appendChild(unorderList);
}

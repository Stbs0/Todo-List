// Import Project class from another module to create new Project.
import { Project } from "../componant/create";
import renderProject from "./renderProjectElement";

// Main function that manages projects.
export default function ass() {
  // Array to hold all the project instances.
  const projectArray = [];

  // Button that triggers the display of input text box for project addition.
  const projectBtn = document.querySelector(".add-project-btn");

  // Input text box where project's name is supplied. By default, it's hidden until projectBtn is clicked
  const input = document.querySelector("#project-name");

  // Click event listener for projectBtn. When clicked, input text box is displayed.
  projectBtn.addEventListener("click", () => {
    input.style.display = "block";
  });

  // Key down event listener for project's input. If Enter key is pressed, a new project is created.
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      // If Enter key is pressed
      input.style.display = "none"; // Hide the input text box
      createProject(e.target.value); // Invoke createProject function with supplied name
      input.value = ""; // Clear the input text box
    }
  });

  // createProject function that creates a new project, renders it, and adds it to projectArray
  function createProject(name) {
    const project = new Project(name); // Create a new project instance
    renderProject(project); // Render project's HTML
    projectArray.push(project); // Add new project to project array
  }

  // Return an array of all the projects.
  return projectArray;
}

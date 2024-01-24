// import { Project } from "../componant/create";
// export default function createProject() {
//   const projectBtn = document.querySelector(".add-project-btn");
//   const addProjectContainer = document.querySelector(".add-project-container");

//   let textValue;

//   projectBtn.addEventListener(
//     "click",
//     () => {
//       const input = document.createElement("input");
//       input.className = "inputProject";
//       addProjectContainer.append(input);
//     },
//     { once: true }
//   );

//   input.addEventListener("keydown", (e) => {
//     const input = document.querySelector(".inputProject");
//     if (e.key === "Enter") {
//       textValue = input.value;
//       input.remove();
//     }
//   });
//   return new Project(textValue);
// }

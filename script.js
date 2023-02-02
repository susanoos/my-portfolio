console.log("hello world");
const projectTitles = document.querySelectorAll(".project-title");

const projects = ["Vendo-Matic 800", "Bankist", "Pokédex"];
console.log(projectTitles);

projectTitles.forEach((projectTitle) => {
  projects.forEach((project) => {
    projectTitle.textContent = project;
    console.log(project);
  });
});

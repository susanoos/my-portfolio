console.log("hello world");
const projectContainer = document.querySelector(".projects-grid");
const projectTitles = document.querySelector(".project-title");

window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

const projects = [
  {
    title: "Vendo-Matic 800",
    description:
      "Virtual vending machine application with command-line interface allowing users to deposit money, built during my time with Merit America and fellow students.",
    img: "https://media4.giphy.com/media/fph1vX16qKDkiz7BnI/giphy.gif?cid=790b7611b80c108f689c67c7e358ec75bc2791544189f1c3&rid=giphy.gif&ct=g",
    liveDemo: "",
    codeRepository:
      "https://github.com/susanoos/Merit-America-Module-1-Capstone-VendingMachine/tree/main",
  },
  {
    title: "Bankist",
    description: `Taught in the JavaScript course I took on Udemy, it was used as a tutorial to implament various features which are frequently used today.`,
    img: "./imgs/bankist.png",
    liveDemo: "https://susanoos.github.io/bankist-landing/",
    codeRepository: "https://github.com/susanoos/bankist-landing",
  },
  {
    title: "Pokédex",
    description:
      "A simple application that allows the user to search for a Pokémon by name. and retrieve information about that Pokémon. (Still under development)",
    img: "./imgs/pokedex.png",
    liveDemo: "https://susanoos.github.io/pokedex/",
    codeRepository: "https://github.com/susanoos/pokedex",
  },
  // {
  //   title: "Pokédex",
  //   description: `A simple application that allows the user to search for a Pokémon by name.
  //   and retrieve information about that Pokémon .`,
  //   img: "./imgs/pokedex.png",
  // },
];
console.log(projectTitles);

const projectsHTML = projects
  .map((project) => {
    return `
    <div class="col">
      <div class="project">
        <h2 class="project-title">${project.title}</h2>
          <div class="img-container">
              <img
                class="img"
                src="${project.img}"
                alt="Screenshot of project 1"
              />
          <div class="project-description__container project-description overlay">
            <p>
              ${project.description}
            </p>
          <div class="project-links">
            <a href="${project.liveDemo}" target="_blank">Demo: ${project.liveDemo}</a>
            <a href="${project.codeRepository}" target="_blank"><i class="fa-brands fa-github icon"></i></a>
            </div>
          </div>
      </div>
    </div>
 </div>
`;
  })
  .join("");

projectContainer.insertAdjacentHTML("afterbegin", projectsHTML);

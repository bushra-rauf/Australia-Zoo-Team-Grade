const sidebar = document.querySelectorAll(".sidebar-item"); 
sidebar.forEach(sidebar => {
   sidebar.addEventListener("click", () => {
      document.querySelector(".active")?.classList.remove("active");
      sidebar.classList.add("active");  
   })

})

let animales = [mammals, reptiles, birds];

let mammals = {
    name : "Echidna",
    lifespan : "50 years",
    group : "mammals",
    food : "insects such as ants and termites, beetle larvae and worms",
    description : "    description: Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    length : "76cm",
    weight : "10kg",
    found: "Throughout Australia"
}

function animale (name, lifespan, group, food, description, length, weight,found) {
    this.name = name;
    this.lifespan = lifespan;
    this.group = group;
    this.food = food;
    this.description = description;
    this.length = length;
    this.weight = weight;
    this.found = found;
}




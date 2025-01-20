//Side-bare responsive to be copy to home page
const togglButton = document.querySelector(".menu-btnn");
 
let asidBarShow = document.querySelector(".asid-home-page-reptiles");
//let togglMain = document.querySelector(".reptile-fromjs");

togglButton.addEventListener("click", () =>{
    asidBarShow.classList.toggle("open");         
});

let reptilesLinks = document.querySelector(".sidbar-links");
reptilesLinks.addEventListener("click", () =>{
    asidBarShow.classList.toggle("open");   
    
 });
  
//Create and initialize an object instance on a class
class Reptile{
    constructor (name, lifespan, image, group,  food, description, length, weight, found) {
        this.name = name,
        this.lifespan = lifespan,
        this.image = image,
        this.group = group,
        this.food = food,
        this.description = description,
        this.length = length,
        this.weight = weight,
        this.found = found
        
    }
}

//Create an instance of an animale defined object type

 let frillneckedlizard = new Reptile("frill-necked lizard", "20 years", "./images/Reptiles/frill-necked-lizard1.png", "reptile", "Small insects and spiders", " When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree." ,
    " 90 cm" , "1 kg", "Northern Australia" );
let HawksbillTurtle = new Reptile("Hawksbill Turtle", "50 years","./images/Reptiles/Hawksbill-Turtle.png", "reptile", "other animals (sponges & jellyfish) sea plants", " The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length." ,
        "80 cm (carapace)" , "50 kg", "Tropical coasts of Queensland, Northern Territory and Western Australia");
let Perentie = new Reptile("Perentie", "20 years", "./images/Reptiles/Perentie1.png",  "reptile", "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds", " The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes." 
            , "2.5 m", "20 kg", "Deserts") ;
 
//define the array of Reptiles
let reptiles = [frillneckedlizard, HawksbillTurtle, Perentie];

//Create a variable for nave list
let ul = document.querySelector(".sidbar-links");
 
reptiles.forEach(item => {
    const animalLists = document.createElement("li");
    animalLists.classList.add("animals-list");
    animalLists.textContent = item.name;
    ul.appendChild(animalLists); 
})

const animalShow = document.querySelectorAll(".animals-list");
    // this is to replace 
let welcomeMessage = document.querySelector(".welcom-message");
let animalsDetl = document.querySelector(".animals-detls");  
let selectedAnimal = " ";
let disss = document.querySelector(".animal-description");

animalShow.forEach((item, index)=> {

        item.addEventListener("click", (e) => {
        if(item.textContent === selectedAnimal) {          
            selectedAnimal = " ";
            welcomeMessage.classList.remove("hidden");
            animalsDetl.classList.add("hidden");
            animalsDetl.classList.remove("show") 
        }else {
            welcomeMessage.classList.add("hidden");
            animalsDetl.classList.remove("hidden");
            animalsDetl.classList.add("show")     
            disss.classList.add("hidden");
            disss.classList.remove("show")            
            selectedAnimal = item.textContent;
            console.log(selectedAnimal)
            let animalIndex = reptiles.findIndex(reptile => reptile.name === selectedAnimal);
            let selectedReptile = reptiles[animalIndex];
            let replll = document.querySelector(".displ")   
            let animalImg = document.getElementById("animale-image-item");            
            disss.textContent = selectedReptile.description;
            replll.textContent = selectedReptile.name;  
            animalImg.src =  selectedReptile.image;           
            let animalLifspan = document.querySelector(".animal-lifspan");
            let animalGroup = document.querySelector(".animal-group");
            let animalFood = document.querySelector(".animal-food")
            let animalLength = document.querySelector(".animal-length")
            let animalWeight = document.querySelector(".animal-weight")
            let animalFound = document.querySelector(".animal-found");   
            animalLifspan.textContent = `Lifespan : ${selectedReptile.lifespan}`;
            animalGroup.textContent = `Group : ${selectedReptile.group}`;
            animalFood.textContent = `Food : ${selectedReptile.food}`;
            animalLength.textContent = `Length : ${selectedReptile.length}`;
            animalWeight.textContent = `Weight : ${selectedReptile.weight}`;
            animalFound.textContent = `Found : ${selectedReptile.found}`; 
        }
    })
}) 
      
let btnReplace = document.querySelector(".display-btn");

    btnReplace.addEventListener("click", (e) => {
       e.preventDefault();
       //it displays the description even if i click on the other link
       if(disss.classList.contains("hidden")) {
           disss.classList.add("show");
           disss.classList.remove("hidden")
           btnReplace.textContent = "Read less";
       }else {
           
           btnReplace.textContent = "Read More";
           disss.classList.remove("show");
           disss.classList.add("hidden");
       }     
})

let linksCliked = document.querySelectorAll(".animals-list");
const activeClass = "activee";
 
    linksCliked.forEach((l) => {
        l.addEventListener("click", function() {
            linksCliked.forEach(li => li.classList.remove(activeClass));
            l.classList.add(activeClass); 
                  
        })
})
         
const classes = ["frillClass", "hawkClass", "perentieClass"];
const links = document.querySelectorAll(".animals-list");

links.forEach((link, index) => {
    link.classList.add(classes[index]);
    
});
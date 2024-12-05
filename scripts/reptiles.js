//Side-bare responsive to be copy to home page
const togglButton = document.querySelector(".menu-btnn");
let asidBarShow = document.querySelector(".asid-home-page-reptiles");
//let animalsLink = document.querySelectorAll(".animals-list") ;
togglButton.addEventListener("click", () =>{
   asidBarShow.classList.toggle("open");
  // animalsLink.classList.toggle("open");   // for the links
   togglButton.classList.toggle("chang-color");
    
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
let Perentie = new Reptile("Perentie", "20 years", "./images/Reptiles/Perentie2.png",  "reptile", "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds", "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes." 
            , "2.5 m", "20 kg", "Deserts") ;
 

//define the array of Reptiles
let reptiles = [frillneckedlizard, HawksbillTurtle, Perentie];

//Create a variable for nave list
let ul = document.querySelector(".sidbar-links");

//loop on Reptiles item to replace the page content and create eventListener to display each animals content
reptiles.forEach(item => {

    let showElementContainerList = document.querySelector("section"); 
    //Create list's elements 
    const animalLists = document.createElement("li");
    //create a class to the list's element
    animalLists.classList.add("animals-list");
    animalLists.textContent = item.name
    ul.appendChild(animalLists)  

    animalLists.addEventListener("click", () => {
         //replace the header with the animals name
         let header = document.querySelector(".replace-title");
         header.textContent = item.name;
         showElementContainerList.appendChild(header)
         //create an image
         let animalsImage = document.getElementById("animale-image-item");        
         animalsImage.src = item.image;
         animalsImage.alt = item.name
         animalsImage.classList.add("image-item");
         showElementContainerList.appendChild(animalsImage) 
         
         let animalsCharacteristic = document.querySelector(".animals-characteristic");
         showElementContainerList.append(animalsCharacteristic);
 
         let animalLifeSpan = document.querySelector(".animal-lifspan");
         animalsCharacteristic.appendChild(animalLifeSpan)
         animalLifeSpan.textContent = `Lifespan : ${item.lifespan}`;
 
         let animalGroup = document.querySelector(".animal-group");
         animalsCharacteristic.appendChild(animalGroup)
         animalGroup.textContent =  `Group : ${item.group}`;
 
         let animalFood = document.querySelector(".animal-food");
         animalsCharacteristic.appendChild(animalFood)
         animalFood.textContent = `Food : ${item.food}`;
 
         let animalLength = document.querySelector(".animal-length");
         animalsCharacteristic.appendChild(animalLength)
         animalLength.textContent = `Length : ${item.length}`;
 
         let animalWeight = document.querySelector(".animal-weight");
         animalsCharacteristic.appendChild(animalWeight)
         animalWeight.textContent = `Weight : ${item.weight}`;
 
         let animalFound = document.querySelector(".animal-found");
         animalsCharacteristic.appendChild(animalFound)
         animalFound.textContent = `Found : ${item.found}`;
 
         let paragraph = document.querySelector(".replace-description");
         paragraph.textContent = item.description;
         showElementContainerList.appendChild(paragraph);        

    })  
    
});


//Active class for active links should be here ander the reptiles foreach in order to function
const animalLists = document.querySelectorAll(".animals-list");

animalLists.forEach(link => {
   link.addEventListener("click", function() {   
       animalLists.forEach(nav => nav.classList.remove("activee"));
       this.classList.add("activee");
         
    })
} )

addEventListener("dblclick", (e) => {
    window.location.href = "reptiles.html";

});

const classes = ["frillClass", "hawkClass", "perentieClass"];
const links = document.querySelectorAll(".animals-list");

links.forEach((link, index) => {
    link.classList.add(classes[index]);
    
});
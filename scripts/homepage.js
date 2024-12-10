function showWelcomeMessage() {
    const animalInfo = document.getElementById('animal-info');
    animalInfo.innerHTML = `
        <h2>Welcome to the Australian Animals Exhibition</h2>
        <p>Click on an animal name to see more information about that animal.</p>
    `;
}
// Show welcome message when page loads
document.addEventListener('DOMContentLoaded', showWelcomeMessage);

function Animal(img, name, lifespan, group, diet, description, length, weight, found) {
    this.img = img;
    this.name = name;
    this.lifespan = lifespan;
    this.group = group;
    this.diet = diet;
    this.description = description;
    this.length = length;
    this.weight = weight;
    this.found = found
}

// Creating animal objects using constructor
let echidna = new Animal("./images/Mammals/free-photo-of-short-beaked-echidna-walking-among-rocks-and-shrubs.jpeg", "Echidna", "50 years", "Mammal", "Insects such as ants and termites, beetle larvae and worms", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They have fleshy noses that can be either on the long side or rather short. Their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.", "76cm", "10kg", "Throughout Australia");
let tasmanianDevil = new Animal("./images/Mammals/free-photo-of-koala-sleeping tas.jpeg", "Tasmanian Devil", "5 years", "Mammal", "Meat from other animals such as wallabies and wombats", "The Tasmanian devil (Sarcophilus harrisii) is a carnivorous marsupial of the family Dasyuridae. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding.", "70cm", "10kg", "Tasmania");
let quokka = new Animal("./images/Mammals/free-photo-of-furry-animal-in-a-junglequokka..jpeg", "Quokka", "10 years", "Mammal", "Plant eaters, they munch on shrubs and grasses", "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies. It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears. The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.", "50cm", "3kg", "Only found on Rottnest Island and a few places on mainland Western Australia");
let frilledNeckLizard = new Animal("./images/Reptiles/frill-necked-lizard1.png", "Frilled-neck Lizard", "20 years", "Reptile", "Small insects and spiders", "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.", "90cm", "1kg", "Northern Australia");
let hawksbillTurtle = new Animal("./images/Reptiles/Hawksbill-Turtle.png", "Hawksbill Turtle", "50 years", "Reptile", "Sponges, jellyfish, sea plants", "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.", "80cm (carapace)", "50kg", "Tropical coasts of Queensland, Northern Territory and Western Australia");
let perentie = new Animal("./images/Reptiles/Perentie2.png", "Perentie", "20 years", "Reptile", "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds", "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth. Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker.", "2.5m", "20kg", "Deserts");
let cassowary = new Animal("./images/Birds/Cassowary.png", "Cassowary", "20 years", "Bird", "Plants, insects, and small animals like mice and lizards", "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.", "1.7m", "44kg", "Queensland");
let kookaburra = new Animal("./images/Birds/Kookaburra2.png", "Kookaburra", "20 years", "Bird", "Insects and small animals including snakes, frogs, and lizards", "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.", "43cm", "300g", "Australia wide");
let yellowTailedBlackCockatoo = new Animal("./images/Birds/Yellow-Tailed1.png", "Yellow Tailed Black Cockatoo", "41 years", "Bird", "Fruit, seeds, and other plant material", "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances.", "65cm", "900g", "SE Australia");

// Creating the animals array
let animals = [echidna, tasmanianDevil, quokka, frilledNeckLizard, hawksbillTurtle, perentie, cassowary, kookaburra, yellowTailedBlackCockatoo];

//Function to show animal information
function generateAnimalList() {
    const animalListContainer = document.getElementById('animal-list'); // Get'animal-list' div
    
    animals.forEach((animal, index) => { // Loop through in the animals array
        const animalDiv = document.createElement('div'); // Create a new div element for each 
        const link = document.createElement('a'); // Create a new anchor element for each 
        link.href = "#"; // Set the href attribute of anchor element to "#"
        link.textContent = animal.name; // Set the text content 
        link.addEventListener('click', function(event) { // Add a click event listener to the anchor element
            event.preventDefault(); // Prevent default link behavior
            showAnimal(index); // Call the showAnimal function to display the animal details
        });
        animalDiv.appendChild(link); // Append the anchor element to div
        animalListContainer.appendChild(animalDiv); // Append the div to the 'animal-list' container
    });
}

// Call the generateAnimalList function to generate the animal list when the page loads
document.addEventListener('DOMContentLoaded', generateAnimalList);

// Track the currently active animal
let activeAnimalIndex = null;
function showAnimal(index) {
    const animalInfo = document.getElementById('animal-info');
    const animalLinks = document.querySelectorAll('#animal-list a');
 
    // Check if the clicked animal is already active
    if (activeAnimalIndex === index) {
        // If the active animal is clicked again, show the welcome message
        showWelcomeMessage();
        animalLinks.forEach(activeAnimalIndex => activeAnimalIndex.classList.remove('active')); // Remove active class
        activeAnimalIndex = null; // Reset active animal
        return;
    } else {
 
    // Clear previous active state
    if (activeAnimalIndex !== null) {
        animalLinks.forEach(activeAnimalIndex => activeAnimalIndex.classList.remove('active'));
    }
    let animal = animals[index];
    const groupLink = {
        Mammal: "mammals.html",
        Reptile: "reptiles.html",
        Bird: "birds.html"
    };

    animalInfo.innerHTML = `
        <img src="${animal.img}" alt="${animal.name}">
        <h2>${animal.name}</h2>
        <p>${animal.description.substring(0, 200)}...</p>
        <p>Diet: ${animal.diet}</p>
        <p>Group: <a href="${groupLink[animal.group]}" target="_blank">${animal.group}</a></p>
    `;
} 

// Add event listeners to sidebar links
document.querySelectorAll('#animal-list a').forEach((link, index) => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        showAnimal(index); 
    })})

  // Update active animal
  activeAnimalIndex = index;
  animalLinks.forEach(activeAnimalIndex => activeAnimalIndex.classList.add('active')); // Add active class to current link
}


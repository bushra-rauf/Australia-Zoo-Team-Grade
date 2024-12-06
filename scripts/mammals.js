const MAMMALS = [

    {

        name: "Echidna",

        lifespan: "50 years",

        group: "mammals",

        food: "insects such as ants and termites, beetle larvae and worms",

        description: "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or short-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",

        length: "76cm",

        weight: "10kg",

        found: "Throughout Australia",

        image: "./images/Mammals/free-photo-of-short-beaked-echidna-walking-among-rocks-and-shrubs.jpeg",
        icon: "./images/Mammals/free-photo-of-short-beaked-echidna-walking-among-rocks-and-shrubs.jpeg",


    },

    {

        name: "Tasmanian Devil",

        lifespan: "5 years",

        group: "mammals",

        food: "A predator, they eat meat from other animals such as wallabies and wombats",

        description: "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina) is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",

        length: "70cm",

        weight: "10kg",

        found: "Tasmania",

        image: "./images/Mammals/free-photo-of-koala-sleepingtasmanian..jpeg",
        icon: "./images/Mammals/free-photo-of-koala-sleepingtasmanian..jpeg"

      

    },

    {

        name: "Quokka",

        lifespan: "10 years",

        group: "mammals",

        food: "Plant eaters, they munch on shrubs and grasses",

        description: "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies. It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears. The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",

        length: "50cm",

        weight: "3kg",

        found: "Only found on Rottnest Island and a few places on mainland Western Australia.",


        image: "./images/Mammals/free-photo-of-furry-animal-in-a-junglequokka..jpeg",

        icon: "./images/Mammals/free-photo-of-furry-animal-in-a-junglequokka..jpeg",


    }

];
 
const sidebar = document.querySelector('.sidebar');

const mammalsContent = document.querySelector('.mammals-content');
 
MAMMALS.forEach((mammal, index) => {

    const img = document.createElement('img');

    img.src = mammal.image;

    img.alt = mammal.name;

    img.dataset.index = index;

    img.addEventListener('click', () => displayMammalsInfo(index));

    sidebar.appendChild(img);

});
 
function displayMammalsInfo(index) {

    const mammal = MAMMALS[index];

    mammalsContent.innerHTML = `
<div class="mammals-details">
<img src="${mammal.image}" alt="${mammal.name}">
<h2>${mammal.name}</h2>
<p><strong>Lifespan:</strong> ${mammal.lifespan}</p>
<p><strong>Group:</strong> ${mammal.group}</p>
<p><strong>Food:</strong> ${mammal.food}</p>
<p><strong>Length:</strong> ${mammal.length}</p>
<p><strong>Weight:</strong> ${mammal.weight}</p>
<p><strong>Found:</strong> ${mammal.found}</p>
<div id="description-container" style="display: none;">
<p>${mammal.description}</p>
</div>
<button id="next-button" class="summa">Next</button>
</div> `;

   
 
    const nextButton = document.getElementById('next-button');

    const descriptionContainer = document.getElementById('description-container');
 
    nextButton.addEventListener('click', () => {

        if (descriptionContainer.style.display === 'none') {

            descriptionContainer.style.display = 'block';

            nextButton.textContent = 'Previous';

        } else {

            descriptionContainer.style.display = 'none';

            nextButton.textContent = 'Next';

        }

    });

}

 
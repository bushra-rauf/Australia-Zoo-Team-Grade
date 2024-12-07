const BIRDS = [
    {
        name: "Cassowary",
        lifespan: "20 years",
        group: "Bird",
        food: "Plants matter like fruit, insects and small animals like mice and lizards",
        description: "It's not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds. These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.",
        length: "1.7m",
        weight: "44kg",
        found: "Queensland",
        image: "./images/Birds/cassowary3.png",
        icon: "./images/icons/Cassowaries.png"
    },
    {
        name: "Kookaburra",
        lifespan: "20 years",
        group: "Bird",
        food: "Insects and small animals including snakes, frogs and lizards",
        description: "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
        length: "43cm",
        weight: "300g",
        found: "Australia wide",
        image: "./images/Birds/Kookaburra2.png",
        icon: "./images/icons/Kookaburra.png"
    },
    {
        name: "Yellow Tailed Black Cockatoo",
        lifespan: "41 years",
        group: "Bird",
        food: "Fruit, seeds and other plant material",
        description: "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size.",
        length: "65 cm",
        weight: "900 grams",
        found: "SE Australia",
        image: "./images/Birds/yellow-tailed2.png",
        icon: "./images/icons/Yellow-Tailed.png"
    }
];

const sidebar = document.querySelector('.bird-icons');
let selectedBirdIndex = null;

BIRDS.forEach((bird, index) => {
  const img = document.createElement('img');
  img.src = bird.icon;
  img.alt = bird.name;
  img.dataset.index = index;
  img.classList.add('bird-icon');
  img.addEventListener('click', () => displayBirdInfo(index));
  sidebar.appendChild(img);
});

function displayBirdInfo(index) {
  const bird = BIRDS[index];

  if (selectedBirdIndex === index) {
    resetView();
    return;
  }

  selectedBirdIndex = index;

  document.getElementById('bird-image').src = bird.image;
  document.getElementById('bird-name').textContent = bird.name;
  document.getElementById('bird-lifespan').textContent = bird.lifespan;
  document.getElementById('bird-group').textContent = bird.group;
  document.getElementById('bird-food').textContent = bird.food;
  document.getElementById('bird-length').textContent = bird.length;
  document.getElementById('bird-weight').textContent = bird.weight;
  document.getElementById('bird-found').textContent = bird.found;
  document.getElementById('bird-description').textContent = bird.description;

  document.getElementById('default-content').style.display = 'none';
  document.getElementById('bird-details').style.display = 'block';

  const descriptionContainer = document.getElementById('description-container');
  descriptionContainer.style.display = 'none';

  const seeMoreButton = document.getElementById('see-more-button');
  seeMoreButton.removeEventListener('click', toggleDescription);
  seeMoreButton.addEventListener('click', toggleDescription);
}

function toggleDescription() {
  const descriptionContainer = document.getElementById('description-container');
  const seeMoreButton = document.getElementById('see-more-button');
  const isHidden = descriptionContainer.style.display === 'none';
  descriptionContainer.style.display = isHidden ? 'block' : 'none';
  seeMoreButton.textContent = isHidden ? 'See Less' : 'See More';
}

function resetView() {
  selectedBirdIndex = null;

  document.getElementById('default-content').style.display = 'block';
  document.getElementById('bird-details').style.display = 'none';

  const seeMoreButton = document.getElementById('see-more-button');
  const descriptionContainer = document.getElementById('description-container');
  descriptionContainer.style.display = 'none';
  seeMoreButton.textContent = 'See More';
}
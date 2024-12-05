document.addEventListener('DOMContentLoaded', () => {
    const teamList = document.getElementById('team-list');
    const memberInfo = document.getElementById('member-info');
    const memberImage = document.getElementById('member-image');
    const memberDetails = document.getElementById('member-details');
    const defaultMessage = document.getElementById('default-message');

    let activeMember = null; 

    const teamMembers = [
        {
            name: "Moshira",
            image: "images/Moshira3.jpg",
            details: "Hello! My name is Moshira, I studied software and graduated in 2013 in Sudan. I am currently studying front-end development."
        },
        {
            name: "Bushra",
            image: "images/Bushra2.jpg",
            details: "Hi! My name is Bushra Raouf, an MBA holder from England, and now I'm focusing on web development, improving my skills with JavaScript."
        },
        {
            name: "Souad",
            image: "images/Souad2.jpg",
            details: "Hello! My name is Souad. I graduated as a web developer in 2019 and am passionate about front-end development and design."
        },
        {
            name: "Meaza",
            image: "images/meaza.jpg",
            details: "Hi! I’m Meaza, a 22-year-old student passionate about learning and teamwork. I worked on the bird section of this project."
        },
        {
            name: "Ranjitha",
            image: "images/ranjitha.jpg",
            details: "Hello! My name is Ranjitha Velusamy. I have an MBA and am currently working on front-end programming in Sweden."
        }
    ];

    teamMembers.forEach(member => {
        const li = document.createElement('li');
        li.textContent = member.name;
        li.dataset.image = member.image;
        li.dataset.details = member.details;
        teamList.appendChild(li);
    });

    teamList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const memberName = e.target.textContent;
            const member = teamMembers.find(m => m.name === memberName);

            const isActive = e.target === activeMember;

            if (activeMember) {
                activeMember.classList.remove('active');
            }

            if (!isActive) {
                e.target.classList.add('active');
                activeMember = e.target;

                memberInfo.style.display = 'block';
                memberImage.src = member.image;
                memberImage.alt = `${member.name}'s image`;
                memberDetails.innerHTML = `<h2>${member.name}</h2><p>${member.details}</p>`;
                defaultMessage.style.display = 'none';
            } else {
                memberInfo.style.display = 'none';
                defaultMessage.style.display = 'block';
                activeMember = null;
            }
        }
    });
});

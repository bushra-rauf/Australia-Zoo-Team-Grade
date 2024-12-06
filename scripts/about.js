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
            image: "images/moshira3.jpg",
            details: " Hello! My name is Moshira,I studied software and graduated in 2013 in Sudan. I am currently studying this interesting course on front-end development, html, css and javascript. I am looking forward to learning more from it. I worked on the aboutus section"
        },
        {
            name: "Bushra",
            image: "images/bushra2.jpg",
            details: "Hi!, My name is Bushra Raouf, an MBA holder from England, completed my studies in 2012. After gaining valuable experience in the business field, I decided to change my career path and pursue my true passion of web development. I have already acquired basic knowledge in web development including HTML and CSS, and I am currently working on improving my skills with JavaScript. I working on home section."
        },
        {
            name: "Souad",
            image: "images/souad2.jpg",
            details: "Hello, my name is Souad, and I graduated from ALKAS school in France in 2019 as a web developer. My interests are more in Front-end development and design. I love creating websites and applications using programming languages such as HTML, CSS, JavaScript, React, and Angular Framework. My passion is to create different applications with different colors, images, and interactions with the user. My goal is to join a company to improve and develop my skills..I worked on the reptiles section."
        },
        {
            name: "Meaza",
            image: "images/meaza.jpg",
            details: "Hi, I’m Meaza, a 22-year-old student passionate about learning and teamwork. For this project, I worked on the bird section, gathering and organizing information about Australian bird species. I enjoyed contributing to this collaborative effort and learning more about Australia’s rich wildlife. Through this project, I focused on creating clear and engaging content to enhance the visitor experience."
        },
        {
            name: "Ranjitha",
            image: "images/ranjitha.jpg",
            details: "Hello!,My name is Ranjitha velusamy, Master of Business Administration and worked in Tamil Nadu Government Administration, India. Currently, doing Front End Programming in Sweden. I worked on the mammals section,"
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

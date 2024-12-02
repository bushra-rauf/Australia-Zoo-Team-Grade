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
            image: "images/Moshira.jpg",
            details: "Moshira is a Frontend Developer in Future Games."
        },
        {
            name: "Bushra",
            image: "images/bushra.jpg",
            details: "Bushra is a designer who loves creating intuitive user experiences."
        },
        {
            name: "Souad",
            image: "images/souad.jpg",
            details: "Souad is a project manager with 10 years of experience."
        },
        {
            name: "Meaza",
            image: "images/meaza.jpg",
            details: "Meaza is a cybersecurity expert."
        },
        {
            name: "Ranjitha",
            image: "images/ranjitha.jpg",
            details: "Ranjitha is a data scientist specializing in machine learning."
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
            const isActive = e.target === activeMember;

            if (activeMember) {
                activeMember.classList.remove('active');
                activeMember = null;
            }

            if (!isActive) {
                const { image, details } = e.target.dataset;

                e.target.classList.add('active');
                activeMember = e.target;

                memberInfo.style.display = 'block';
                memberImage.src = image;
                memberImage.alt = `${e.target.textContent}'s image`;
                memberDetails.innerHTML = `<h2>${e.target.textContent}</h2><p>${details}</p>`;
                defaultMessage.style.display = 'none';
            } else {
                memberInfo.style.display = 'none';
                defaultMessage.style.display = 'block';
            }
        }
    });
});

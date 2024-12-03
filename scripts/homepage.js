function showWelcomeMessage() {
    const animalInfo = document.getElementById('animal-info');
    animalInfo.innerHTML = `
        <h2>Welcome to the Australian Animals Exhibition</h2>
        <p>Click on an animal name to see more information about that animal.</p>
    `;
}
// Show welcome message when page loads
document.addEventListener('DOMContentLoaded', showWelcomeMessage);
const toggleContainer = document.getElementById('toggle-container');
const toggle = document.getElementById('toggle');
const toggleActive = document.querySelector('#toggle-container.active');

toggleContainer.addEventListener('click',() => {

    toggleContainer.classList.toggle('active');
    toggle.classList.toggle('active');
    
});











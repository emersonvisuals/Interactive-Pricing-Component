const toggleContainer = document.getElementById('toggle-container');
const toggle = document.getElementById('toggle');
const toggleActive = document.querySelector('#toggle-container.active');

toggleContainer.addEventListener('click',() => {

    toggleContainer.classList.toggle('active');
    toggle.classList.toggle('active');
    
});

const slider = document.querySelector('input');
const value = document.querySelector('.sliderValue span');

value.textContent = slider.value;

slider.oninput = function() {
    value.textContent = this.value;
}

console.log(slider.value);











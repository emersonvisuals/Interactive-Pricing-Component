// Toggle 
const toggleContainer = document.getElementById('toggle-container');
const toggle = document.getElementById('toggle');
const toggleActive = document.querySelector('#toggle-container.active');
let amount = document.querySelector('.sliderValue span');

toggleContainer.addEventListener('click',() => {

    toggleContainer.classList.toggle('active');
    toggle.classList.toggle('active');
    amount.classList.toggle ('active');
});


// Slider
const slider = document.querySelector('input');
const pageViews = document.querySelector('.card-heading span');

amount.textContent = '$' + slider.value + ".00";
pageViews.textContent = slider.value*5 + "K";

slider.oninput = function() {
    
    amount.textContent = "$" + this.value + ".00";

    pageViews.textContent = this.value*5 + 'k';

    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, hsl(174, 86%, 45%) 0%, hsl(174, 86%, 45%) ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
}












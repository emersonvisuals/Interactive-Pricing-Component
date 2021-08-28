const toggleContainer = document.getElementById('toggle-container');
const toggle = document.getElementById('toggle');
const toggleActive = document.querySelector('#toggle-container.active');

toggleContainer.addEventListener('click',() => {

    toggleContainer.classList.toggle('active');
    toggle.classList.toggle('active');
    
});

const slider = document.querySelector('input');
const amount = document.querySelector('.sliderValue span');

amount.textContent = '$' + slider.value + ".00";

slider.oninput = function() {
    amount.textContent = "$" + this.value + ".00";
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
}











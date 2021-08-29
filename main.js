// Variables
let toggleContainer = document.getElementById('toggle-container');
let toggle = document.getElementById('toggle');
let toggleActive = document.querySelector('#toggle-container.active');
let duration = document.querySelector('.month');
let price = document.querySelector(".priceValue");
let range = document.querySelector('#myinput');
let pageViews = document.querySelector(".page-views span");


// Slider Progress Bar
range.oninput = function() {

    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%)' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
}












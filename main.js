// Variables

let myCheckbox = document.querySelector('.switch input')
let switcher = document.querySelector('.switch');
let toggle = document.getElementById('toggle');
let duration = document.querySelector('.month');
let price = document.querySelector(".priceValue");
let range = document.querySelector('#myinput');
let pageViews = document.querySelector(".page-views span");

console.log(switcher);
console.log(myCheckbox);
console.log(price);
console.log(duration);

// Slider Progress Bar
range.oninput = function() {

    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%)' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
}




switcher.onclick = function(){

    

    if(myCheckbox.checked == true){
        
        let priceInt = parseInt(price.textContent);
        price.textContent = `${(priceInt - (priceInt * .25)) * 12}`;
        duration.textContent = `/year`;

    }else{

        refreshPrices();
        duration.textContent = `/month`;
    }
}












// Variables

let checkbox = document.querySelector('.switch input')
let switcher = document.querySelector('.switch');
let toggle = document.getElementById('toggle');
let duration = document.querySelector('.month');
let price = document.querySelector(".priceValue");
let range = document.querySelector('#myinput');
let pageViews = document.querySelector(".page-views span");

console.log(switcher);
console.log(checkbox);
console.log(price);
console.log(duration);


// Slider Progress Bar
range.oninput = function() {

    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%)' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
}



// Monthly or Yearly
switcher.onclick = function(){

    

    if(checkbox.checked === true){
        
        let priceInt = parseInt(price.textContent);
        price.textContent = `${(priceInt - (priceInt * .25)) * 12}`;
        duration.textContent = `/year`;
        switcher.style.backgroundColor = "hsl(174, 86%, 45%)";

    }else{

        refreshPrices();
        duration.textContent = `/month`;
        switcher.style.backgroundColor = "hsl(223, 50%, 87%)";
    }
}


// Values 
range.addEventListener('input', refreshPrices);

function refreshPrices(){
    
    if(range.value == 0){

        if(checkbox.checked == true){
            price.textContent = `${(8 - (8 * .25)) * 12}`;
        }else{
            price.textContent = 8;
        }

        pageViews.textContent = "10k";

    } 

    if(range.value == 1){
        
        if(checkbox.checked == true){
            price.textContent = 108;
        }else{
            price.textContent = 12;
        }

        pageViews.textContent = "50k";
    }

    if(range.value == 2){
        
        if(checkbox.checked == true){
            price.textContent = 144;
        }else{
            price.textContent = 16;
        }

        pageViews.textContent = "100k";
    }

    if(range.value == 3){

        if(checkbox.checked == true){
            price.textContent = 216;
        }else{
            price.textContent = 24;
        }

        pageViews.textContent = "500k";

    }

    if(range.value == 4){

        if(checkbox.checked == true){
            price.textContent = 324;
        }else{
            price.textContent = 36;
        }

        pageViews.textContent = "1M";
    }

}















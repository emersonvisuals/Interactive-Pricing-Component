// Variables
let checkbox = document.querySelector('.switch input')
let switchToggle = document.querySelector('.switch');
let toggle = document.getElementById('toggle');
let duration = document.querySelector('.month');
let price = document.querySelector(".priceValue");
let range = document.getElementById('myinput');
let pageViews = document.querySelector(".page-views span");

// Slider Progress Bar
range.oninput = function() {

    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%)' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
}




// Monthly VS Yearly
switchToggle.onclick = function(){

    
    if(checkbox.checked === true){
        
        let priceChange = parseInt(price.textContent);
        price.textContent = `${((priceChange * .75)) * 12}`;
        duration.textContent = `/year`;
        switchToggle.style.backgroundColor = "hsl(174, 86%, 45%)";

    }else{

        refreshPrices();
        duration.textContent = `/month`;
        switchToggle.style.backgroundColor = "hsl(223, 50%, 87%)";
    }
}


// Range Values 
range.addEventListener('input', refreshPrices);

function refreshPrices(){
    
    if(range.value == 0){

        if(checkbox.checked == true){
            price.textContent = `${((8 * .75)) * 12}`;
            
        }else{
            price.textContent = 8;
        }

        pageViews.textContent = "10k";

    } 

    if(range.value == 1){
        
        if(checkbox.checked == true){
            price.textContent = `${((12 * .75)) * 12}`;
        }else{
            price.textContent = 12;
        }

        pageViews.textContent = "50k";
    }

    if(range.value == 2){
        
        if(checkbox.checked == true){
            price.textContent = `${((16 * .75)) * 12}`;
        }else{
            price.textContent = 16;
        }

        pageViews.textContent = "100k";
    }

    if(range.value == 3){

        if(checkbox.checked == true){
            price.textContent = `${((24 * .75)) * 12}`;
        }else{
            price.textContent = 24;
        }

        pageViews.textContent = "500k";

    }

    if(range.value == 4){

        if(checkbox.checked == true){
            price.textContent = `${((36 * .75)) * 12}`;
        }else{
            price.textContent = 36;
        }

        pageViews.textContent = "1M";
    }

}


// Discount Word Added to Media Screen Change

  const desktopScreen = window.matchMedia("(max-width: 900px)")
  const discount = document.querySelector('.discount p');

  function desktopScreenChange(desktopScreen) {
      if (desktopScreen.matches) {
          discount.textContent = "25%";
      } else {
            discount.textContent = "25% discount";
      }
  }

  desktopScreenChange(desktopScreen); 
  desktopScreen.addListener(desktopScreenChange)
















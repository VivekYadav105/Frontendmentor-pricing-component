const views = document.querySelector('#views p span');
const pricing = document.querySelector('#price h1 strong')
const priceFrequency = document.querySelector('h1 span') 
const seek = document.getElementById('seek-bar')
const progress=document.getElementById('progressbar')
const discount = document.getElementById('billing')
const form = document.getElementsByTagName('form')[0]

updatewidth() //initial call

discount.addEventListener('input',function(){
  if(this.checked==false){
    priceFrequency.innerHTML='/month'
    seek.max=36
    document.querySelector('.button #year').style.color = "var(--light-font)";
    pricing.innerHTML=seek.value+".00";
  }
    else{
    seek.max=0.75*(seek.max)*12
    priceFrequency.innerHTML='/year'
    document.querySelector('.button #year').style.color = "var(--discount-text)";
    pricing.innerHTML=12*(seek.value)+".00";
  }
  updatewidth();
  updateprice();
  updateview();
})

seek.addEventListener('input',function(){
  updateprice();
  updateview();
  updatewidth();
})

function updatewidth(){
  width=(100)*parseFloat(seek.value/seek.max);
  progress.style.width=width+.5+'%';
}
function updateprice(){
  pricing.innerHTML=seek.value+".00";
}
function updateview(){
  var price;
  if(discount.checked){
    price = Math.floor(Number(seek.value)/9) ;
  }
  else{
    price = Number(seek.value);
  }
  if(price<=8){views.innerHTML="10k"}
  else if(price>8 && price<=12){views.innerHTML="50k";}
  else if(price>12 && price<=16){views.innerHTML="100k";}
  else if(price>16 && price<=24){views.innerHTML="500k";}
  else if(price>24 && price<=36){views.innerHTML="1M";}
}
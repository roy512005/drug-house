// var button = document.getElementById('my-button');
// var button2 = document.getElementById('my-button2');


function minus(id){
  var display = document.getElementById('count'+id);
  let count_element = document.getElementById('count_value'+id);
  let count = count_element.value;
  count--
  if(0< count){
    display.innerHTML = count;
    count_element.value = count;
  }
  else{ 
    count=0
    count_element.value = 0;
  }
}
function plus(id){
  var display = document.getElementById('count'+id);
  let count_element = document.getElementById('count_value'+id);
  let count = count_element.value;
  count++
  display.innerHTML = count; 
  count_element.value = count;
}

var seb1 = document.getElementById('se-b1');
var seb2 = document.getElementById('se-b2');
var secount = document.getElementById('se-count');
var coun = 0;
seb1.addEventListener('click', function() {
  coun--
  if(0< coun){
    secount.innerHTML = coun;
  }
  else{ 
    coun=0
  }
});
seb2.addEventListener('click', function() {
  coun++
  secount.innerHTML = coun; 
});



function imgchange(smallimg){
  let fullimg= document.getElementById('fullimg-box');
  fullimg.src= smallimg.src;
}


function togleList(){
  document.getElementById('toglistma').classList.toggle('toglistblo');
  document.getElementsByClassName('togarrow')[0].classList.toggle('togrotate');
}
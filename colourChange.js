function blueColor(){
  document.getElementById('grid-two').style.backgroundColor = "rgba(0,0,255,0.7)";
  document.getElementById('text').innerHTML = "hi, my name is Blue";
  calculation("Blue");
}
function greenColor(){
  document.getElementById('grid-two').style.backgroundColor = "rgba(0,255,0,0.7)";
  document.getElementById('text').innerHTML = "hi, my name is Green";
  calculation("Green");
}
function redColor(){
  document.getElementById('grid-two').style.backgroundColor = "rgba(255,0,0,0.9)";
  document.getElementById('text').innerHTML = "hi, my name is Red";
  calculation("Red");
}

function calculation(colour){
  var sum = 0;
  for(i=0; i < colour.length; i++){
    sum += colour.charCodeAt(i);
  }
  document.getElementById('cal').innerHTML = sum;
}

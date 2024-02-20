let boxContainer = document.querySelector("#Box_container");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");


function boxAdd() {
  let boxes = ``;

  for (let i = 1; i <= 60; i++) {
    boxes += `
                <div class="box">

                 </div>`;
  }

  boxContainer.innerHTML = boxes;
}
boxAdd();


let red = 0;
let green = 0;
let blue = 0;

function getRandomColor() {
  var red = Math.trunc(Math.random() * 256);
  var green = Math.trunc(Math.random() * 256);
  var blue = Math.trunc(Math.random() * 256);
  let opacityNumber= Math.random();
  var opacity = opacityNumber.toFixed(1);

  console.log(opacity)

  let rgbcol=`rgb(${red}, ${green}, ${blue},${opacity})`;
  
  return rgbcol;
}

var Boxes = document.getElementsByClassName("box");
var length=Boxes.length;

var interval
var timer=true;

function mergeColor(lengths) {
  var currentIndex = 0;
    interval = setInterval(function () {
      if (currentIndex < lengths) {
        Boxes[currentIndex].style.backgroundColor = getRandomColor()
        currentIndex++;
      }
    }, 100);
}




 startBtn.addEventListener("click", function () {   
    timer=true
    Interval= setInterval(mergeColor(length), 100); 
    timer=false
});

stopBtn.addEventListener("click", function () {
  if (!timer) {
    clearInterval(interval);
    timer=true
  }

});
resetBtn.addEventListener("click", function () {
  clearInterval(interval);
  startBtn.disabled = false;
  boxContainer.innerHTML = ""; 
  boxAdd(); 
    

});

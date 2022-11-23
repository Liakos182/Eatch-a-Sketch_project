document.getElementById("reso").value = 64;//gives the slider input its initial value
let color = 'black';
let size = document.getElementById("reso").value;
let container = document.getElementById("container");
let resolution = document.getElementById("reso");
let clear = document.getElementById("right-button");
let mode = document.getElementById("left-button");
let display = document.getElementById("display")


/*The create screen creates the inital the initial screen
It creates a bounch of divs displayed as grid going from left to right
called across, then displays as flex its inner divs called pixels */

display.innerHTML = `${size} x ${size}`;

function createScreen1(size){
   
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    for (let i = 0; i < Math.pow(size,2);i++){
        let pixel = document.createElement('div');
        pixel.style.backgroundColor = 'snow';
        pixel.addEventListener('mouseover',draw);
        
        container.insertAdjacentElement("beforeend", pixel)
       
    }

    //document.getElementById("container").style.gridTemplateColumns:`repeat(${reso}, 1fr);`
    //document.getElementById("container").style.gridTemplateRows:`repeat(${reso}, 1fr);*/`
}
createScreen1(size);

resolution.addEventListener('mouseup',resize);
clear.addEventListener('click',reset);
mode.addEventListener('click',changeMode)

function resize(){
    reset();
    size = document.getElementById("reso").value;
    display.innerHTML = `${size} x ${size}`;
    createScreen1(size);
}
function reset(){
    let pixel = document.querySelectorAll('#container > div');
    for (let i= 0;i < Math.pow(size,2);i++){
        pixel[i].style.backgroundColor = 'snow';
    }
    
   }
function changeMode(){
    if (mode.innerText === "Draw"){
        mode.innerText = "Erase"
        color = 'black';
    }else{
        mode.innerText = "Draw"
        color = 'snow';
    }
}
function draw(){
    this.style.backgroundColor = color;
}


document.getElementById("reso").value = 64;//gives the slider input its initial value
let gridSize = document.getElementById("reso").value;
let container = document.getElementById("container")


/*The create screen creates the inital the initial screen
It creates a bounch of divs displayed as grid going from left to right
called across, then displays as flex its inner divs called pixels */

function createScreen1(){
   
    for (let i = 0; i< gridSize; i++){
    let across = document.createElement("div");
    across.className = "across";
    container.appendChild(across);
    for (let j=0; j< gridSize; j++){
        pixel = document.createElement("div");
        pixel.className = "pixel";
        across.appendChild(pixel);
    }

    //document.getElementById("container").style.gridTemplateColumns:`repeat(${reso}, 1fr);`
    //document.getElementById("container").style.gridTemplateRows:`repeat(${reso}, 1fr);*/`
    }
    
}
createScreen1()
pixel.addEventListener('mousedown',draw);

function draw(){
    console.log("am gay");
}

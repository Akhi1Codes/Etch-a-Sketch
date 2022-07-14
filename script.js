const slider = document.getElementById('sizeSlider');
const sliderVal = document.getElementById('slide_val');
const gridCont = document.getElementById('grid_container');
const backgroundColors = document.getElementById('background_colors').querySelectorAll(".circles");
const grids = document.getElementById('grid_container');
const gridElements = document.querySelectorAll(".grid_elements");
const gridOn = document.getElementById('gridon');
const gridOff = document.getElementById('gridoff');
const clear = document.getElementById('clear');
const clrSelector = document.getElementById('color-selector');

// Getting the value of the color boxes for background color
backgroundColors.forEach(backgroundColor =>
    backgroundColor.addEventListener('click',function(){
        clr = getComputedStyle(backgroundColor).getPropertyValue("background-color");
        backcolor(clr)
    })
)
// Using the value to change background color
function backcolor(bg_color){
    grids.style.backgroundColor = bg_color;
}

slider.addEventListener('input', function(){
    sliderVal.innerText = slider.value;
    size = slider.value;
    makeGrid(size,size)
})

function makeGrid(rows,cols){
    gridCont.style.setProperty('--grid-rows',rows);
    gridCont.style.setProperty('--grid-cols',cols);
    removecells()
    for(i=0;i<(rows*cols);i++){
        let cell = document.createElement("div");
        cell.classList.add('grid_elements');
        cell.style.border = "1px solid black"
        gridCont.appendChild(cell);
    }
    gridclr()
}
function gridclr(){
const gridElements = document.getElementById('grid_container').querySelectorAll(".grid_elements");
    gridElements.forEach(grid =>
        grid.addEventListener('click',function(){
            grid.style.backgroundColor = clrSelector.value;
    }))
}
function removecells(){
    while(gridCont.lastChild){
        gridCont.removeChild(gridCont.lastChild);
    }
 }

gridOn.addEventListener('click', function(){
    const gridElements = document.getElementById('grid_container').querySelectorAll(".grid_elements");
    gridElements.forEach(gridElement => gridElement.style.border = "1px solid black")
})
gridOff.addEventListener('click', function(){
    const gridElements = document.getElementById('grid_container').querySelectorAll(".grid_elements");
    gridElements.forEach(gridElement => gridElement.style.border = null)
})

clear.addEventListener('click', function(){
    const gridElements = document.getElementById('grid_container').querySelectorAll(".grid_elements");
    gridElements.forEach(gridElement => gridElement.style.backgroundColor = null)
})

function erased(){
    const gridElements = document.getElementById('grid_container').querySelectorAll(".grid_elements");
    gridElements.forEach(gridElement => gridElement.addEventListener('click', function(){
        if(gridElement.style.backgroundColor !== grids.style.backgroundColor){
            gridElement.style.backgroundColor = grids.style.backgroundColor
        }else{
            gridElement.style.backgroundColor = clrSelector.value;
        }
    }))
}
gridclr()
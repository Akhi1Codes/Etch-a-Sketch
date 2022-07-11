const slider = document.getElementById('sizeSlider');
const sliderVal = document.getElementById('slide_val');
const gridCont = document.getElementById('grid_container');
console.log(slider)

slider.addEventListener('input', function(){
    sliderVal.innerText = slider.value;
    rows = slider.value;
    cols = slider.value;
    makeGrid(rows,cols)
},false)

function makeGrid(rows,cols){
    gridCont.style.setProperty('--grid-rows',rows);
    gridCont.style.setProperty('--grid-cols',cols);
    for(i=0;i<(rows*cols);i++){
        let cell = document.createElement("div");
        console.log("rows"+rows)
        console.log("columns"+cols)
        console.log(rows*cols)
        cell.classList.add('grid_elements');
        gridCont.appendChild(cell);
    }
}
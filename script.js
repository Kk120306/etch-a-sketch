const container = document.getElementById('container');
const gridBtn = document.getElementById('gridBtn');
const rbwBtn = document.getElementById('rbwBtn');

function startEtching(size){
    function makeGrid() {
        for (i = 0; i < size; i++) {
          for (j = 0; j < size; j++) {
            const row = document.createElement("div");
            container.appendChild(row);
            row.classList.add("grid-style", "grids");
            row.style.width = `${700/size}px`;
            row.style.height = `${700/size}px`;
          }
        }
    }
    
    function hover(){
        const allGrids = document.querySelectorAll('.grids');
        allGrids.forEach((grid) => {
            grid.addEventListener("mouseover", () => {
                grid.style.backgroundColor = "black";
            })
        })
    }

    makeGrid();
    hover();
}

function createNewGrid(){
    const size = Number(prompt("Please enter a number lower than 100"));
    if (size > 100 || size < 1){
        alert("Enter A Valid Input!");
        return;
    }

    container.innerHTML = "";
    startEtching(size);
}


startEtching(16);

gridBtn.addEventListener('click', () => createNewGrid());

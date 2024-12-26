const container = document.getElementById('container');
const gridBtn = document.getElementById('gridBtn');
const rbwBtn = document.getElementById('rbwBtn');

let rnwMode = false;

function startEtching(size = 16) {

    function makeGrid() {
        container.innerHTML = ""; 
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const row = document.createElement("div");
                container.appendChild(row);
                row.classList.add("grid-style", "grids");
                row.style.width = `${700 / size}px`;
                row.style.height = `${700 / size}px`;
            }
        }
    }


    function hover() {
        const allGrids = document.querySelectorAll('.grids');
        allGrids.forEach((grid) => {
            grid.addEventListener("mouseover", () => {
                if (!rnwMode) {
                    grid.style.backgroundColor = "black"; 
                } else {
                    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                    const r = randomBetween(0, 255);
                    const g = randomBetween(0, 255);
                    const b = randomBetween(0, 255);
                    grid.style.backgroundColor = `rgb(${r},${g},${b})`; 
                }
            });
        });
    }
    
    makeGrid();
    hover();
}

function createNewGrid() {
    const size = Number(prompt("Please enter a number lower than 100"));
    if (size > 100 || size < 1) {
        alert("Enter A Valid Input!");
        return;
    }

    startEtching(size);
}


startEtching(16);

gridBtn.addEventListener('click', () => createNewGrid());

rbwBtn.addEventListener('click', () => {
    rnwMode = !rnwMode; 
    rbwBtn.textContent = rnwMode ? "Rainbow Mode: ON" : "Rainbow Mode: OFF";
    

    const allGrids = document.querySelectorAll('.grids');
    allGrids.forEach(grid => {
        grid.style.backgroundColor = ""; 
    });
});

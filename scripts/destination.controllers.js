const moonBtn = document.querySelectorAll('.moon');
const marsBtn = document.querySelectorAll('.mars');
const europaBtn = document.querySelectorAll('.europa');
const titanBtn = document.querySelectorAll('.titan');


const moonContainer = document.getElementById('moon');
const marsContainer = document.getElementById('mars');
const europaContainer = document.getElementById('europa');
const titanContainer = document.getElementById('titan');


//Escuchar eventos de los botones
moonBtn.forEach(elemento => {
    elemento.addEventListener("click", activeSectionMoon);
});
marsBtn.forEach(elemento => {
    elemento.addEventListener("click", activeSectionMars);
});
europaBtn.forEach(elemento => {
    elemento.addEventListener("click", activeSectionEuropa);
});
titanBtn.forEach(elemento => {
    elemento.addEventListener("click", activeSectionTitan);
});

/*------------------------ Sección Moon -------------------------*/
function activeSectionMoon(){
    moonContainer.style.display = "grid";
    closeSectionMars()
    closeSectionEuropa()
    closeSectionTitan()
};

function closeSectionMoon(){
    moonContainer.style.display = "none";
};

/*------------------------ Sección Mars -------------------------*/
function activeSectionMars(){
    marsContainer.style.display = "grid";
    closeSectionMoon()
    closeSectionEuropa()
    closeSectionTitan()
};

function closeSectionMars(){
    marsContainer.style.display = "none";
};

/*------------------------ Sección Europa -------------------------*/
function activeSectionEuropa(){
    europaContainer.style.display = "grid";
    closeSectionMars()
    closeSectionMoon()
    closeSectionTitan()
};
function closeSectionEuropa(){
    europaContainer.style.display = "none";
};

/*------------------------ Sección Titan -------------------------*/
function activeSectionTitan(){
    titanContainer.style.display = "grid";
    closeSectionMars()
    closeSectionMoon()
    closeSectionEuropa()
};
function closeSectionTitan(){
    titanContainer.style.display = "none";
};


//Selectores de botones
const commanderBtn = document.querySelectorAll('.first_btn');
const specialistBtn = document.querySelectorAll('.second_btn');
const pilotBtn = document.querySelectorAll('.third_btn');
const engineerBtn = document.querySelectorAll('.four_btn');

//Selectores de contenedores
const commanderContainer = document.getElementById('commander');
const specialistContainer = document.getElementById('specialist');
const pilotContainer = document.getElementById('pilot');
const engineerContainer = document.getElementById('engineer');

//Escuchador de Eventos Btn.
commanderBtn.forEach(crew => {
    crew.addEventListener('click', openCommander)
});

specialistBtn.forEach(crew => {
    crew.addEventListener('click', openSpecialist)
});
pilotBtn.forEach(crew => {
    crew.addEventListener('click', openPilot)
});
engineerBtn.forEach(crew => {
    crew.addEventListener('click', openEngineer)
});

//Funciones
/*------------------------------------------------*/
function openCommander(){
    commanderContainer.style.display = "grid";
    closeSpecialist();
    closePilot();
    closeEngineer();
};
function closeCommander(){
    commanderContainer.style.display = "none";
};
/*------------------------------------------------*/
function openSpecialist(){
    specialistContainer.style.display = "grid";
    closeCommander();
    closePilot();
    closeEngineer();
};
function closeSpecialist(){
    specialistContainer.style.display = "none";
};
/*------------------------------------------------*/
function openPilot(){
    pilotContainer.style.display = "grid";
    closeCommander();
    closeSpecialist();
    closeEngineer();
};
function closePilot(){
    pilotContainer.style.display = "none";
};
/*------------------------------------------------*/
function openEngineer(){
    engineerContainer.style.display = "grid";
    closeCommander();
    closeSpecialist();
    closePilot();
};
function closeEngineer(){
    engineerContainer.style.display = "none";
};
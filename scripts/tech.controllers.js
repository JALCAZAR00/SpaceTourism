//Selectores de botones
const vehicleBtn = document.querySelectorAll('.first_btn');
const spaceportBtn = document.querySelectorAll('.second_btn');
const capsuleBtn = document.querySelectorAll('.third_btn');

//Selectores de contenedores
const vehicleContainer = document.getElementById('vehicle');
const spaceportContainer = document.getElementById('spaceport');
const capsuleContainer = document.getElementById('capsule');

//Cambio de imagenes para responsive design
if (window.innerWidth >= 1440) {
    const vehicleImg = document.getElementById("vehicle_img");
    const spaceportImg = document.getElementById("spaceport_img");
    const capsuleImg = document.getElementById("capsule_img");
    vehicleImg.src = "../assets/technology/image-launch-vehicle-portrait.jpg";
    spaceportImg.src = "../assets/technology/image-spaceport-portrait.jpg";
    capsuleImg.src = "../assets/technology/image-space-capsule-portrait.jpg";
};

//Escuchador de eventos
vehicleBtn.forEach(crew => {
    crew.addEventListener('click', openVehicle)
});
spaceportBtn.forEach(crew => {
    crew.addEventListener('click', openSpaceport)
});
capsuleBtn.forEach(crew => {
    crew.addEventListener('click', openCapsule)
});

//Funciones
function openVehicle(){
    vehicleContainer.style.display = "grid"
    closeSpaceport()
    closeCapsule()
};
function closeVehicle(){
    vehicleContainer.style.display = "none"
};
/*----------------------------------------*/
function openSpaceport(){
    spaceportContainer.style.display = "grid"
    closeVehicle()
    closeCapsule()
};
function closeSpaceport(){
    spaceportContainer.style.display = "none"
};
/*----------------------------------------*/
function openCapsule(){
    capsuleContainer.style.display = "grid"
    closeVehicle()
    closeSpaceport()
};
function closeCapsule(){
    capsuleContainer.style.display = "none"
};
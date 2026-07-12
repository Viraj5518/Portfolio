new Typed("#typing",{

strings:[

"Software Developer",
"Python Developer",
"AI Developer"

],

typeSpeed:70,

backSpeed:40,

backDelay:1500,

loop:true

});



const photo = document.querySelector(".hero-photo img");


window.addEventListener("scroll",()=>{

let value = window.scrollY;


photo.style.transform =
`translateY(${value*0.08}px)`;

});
// SCROLL REVEAL


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},{threshold:0.2});



sections.forEach(section=>{

observer.observe(section);

});

// PARTICLES


const particleBox =
document.getElementById("particles");


for(let i=0;i<80;i++){


let p=document.createElement("div");


p.className="particle";


p.style.left =
Math.random()*100+"%";


p.style.animationDuration =
(5+Math.random()*10)+"s";


p.style.animationDelay =
Math.random()*5+"s";


particleBox.appendChild(p);


}
// CARD 3D TILT EFFECT

const cards = document.querySelectorAll(
".project, .skill-box, .cert, .journey-card, .character"
);


cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


let rect = card.getBoundingClientRect();


let x = e.clientX - rect.left;
let y = e.clientY - rect.top;


let centerX = rect.width/2;
let centerY = rect.height/2;


let rotateX = (y-centerY)/15;
let rotateY = (centerX-x)/15;


card.style.transform =
`perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;


});



card.addEventListener("mouseleave",()=>{


card.style.transform="";


});


});



// CURSOR LIGHT

const light = document.getElementById("cursor-light");

if(light){

document.addEventListener("mousemove",(e)=>{

light.style.left = e.clientX + "px";
light.style.top = e.clientY + "px";

});

}

// ================= PROJECT MODAL =================

const modal = document.getElementById("projectModal");
const closeBtn = document.querySelector(".close");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTags = document.getElementById("modalTags");

const githubBtn = document.getElementById("githubBtn");
const liveBtn = document.getElementById("liveBtn");

function openProject(title, image, desc, tags, github, live){

    modal.style.display = "flex";

    modalTitle.innerText = title;
    modalImage.src = image;
    modalDesc.innerText = desc;

    modalTags.innerHTML = "";

    tags.forEach(tag=>{

        modalTags.innerHTML += `<span>${tag}</span>`;

    });

    githubBtn.href = github;
    liveBtn.href = live;

}

closeBtn.onclick = function(){

    modal.style.display="none";

}

window.onclick = function(e){

    if(e.target==modal){

        modal.style.display="none";

    }

}
// ==========================
// CERTIFICATE POPUP
// ==========================

const certificateCards = document.querySelectorAll(".certificate-card img");
const popup = document.getElementById("certificate-popup");
const popupImage = document.getElementById("popup-image");
const closePopup = document.getElementById("close-popup");

certificateCards.forEach((img) => {

    img.addEventListener("click", () => {

        popup.classList.add("active");

        popupImage.src = img.src;

    });

});

closePopup.addEventListener("click", () => {

    popup.classList.remove("active");

});

popup.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.classList.remove("active");

    }

});
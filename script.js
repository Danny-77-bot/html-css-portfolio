/* =========================
   THEME TOGGLE
========================= */


const themeButton = document.getElementById("theme-toggle");

const body = document.body;


// Load saved theme

const savedTheme = localStorage.getItem("theme");


if(savedTheme === "light"){

    body.classList.add("light");

    themeButton.textContent="☀️";

}



// Change theme

themeButton.addEventListener("click",()=>{


    body.classList.toggle("light");



    if(body.classList.contains("light")){


        localStorage.setItem("theme","light");

        themeButton.textContent="☀️";


    }
    else{


        localStorage.setItem("theme","dark");

        themeButton.textContent="🌙";


    }


});








/* =========================
   MOBILE MENU
========================= */


const menuBtn = document.getElementById("menu-btn");

const navbar = document.querySelector(".navbar");



menuBtn.addEventListener("click",()=>{


    navbar.classList.toggle("active");


    if(navbar.classList.contains("active")){


        menuBtn.textContent="✖";


    }
    else{


        menuBtn.textContent="☰";


    }



});




// close menu when clicking link


document.querySelectorAll(".navbar a")
.forEach(link=>{


link.addEventListener("click",()=>{


navbar.classList.remove("active");

menuBtn.textContent="☰";


});


});









/* =========================
   TYPING EFFECT
========================= */



const typingText =
document.getElementById("typing");



const words=[

"MERN Stack Developer",

"Frontend Developer",

"Full Stack Developer",

"Problem Solver"

];



let wordIndex=0;

let charIndex=0;

let deleting=false;



function typeEffect(){


let currentWord = words[wordIndex];



if(!deleting){


typingText.textContent =
currentWord.substring(0,charIndex++);



if(charIndex > currentWord.length){


deleting=true;

setTimeout(typeEffect,1000);

return;

}



}
else{


typingText.textContent =
currentWord.substring(0,charIndex--);



if(charIndex===0){


deleting=false;


wordIndex++;


if(wordIndex===words.length){

wordIndex=0;

}


}



}



setTimeout(typeEffect,100);


}



typeEffect();









/* =========================
   SCROLL REVEAL
========================= */



const sections =
document.querySelectorAll(".section");



window.addEventListener("scroll",()=>{


sections.forEach(section=>{


const position =
section.getBoundingClientRect().top;



const screenHeight =
window.innerHeight;



if(position < screenHeight - 100){


section.style.opacity="1";

section.style.transform="translateY(0)";


}


});


});





// initial hidden style


sections.forEach(section=>{


section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition=".8s";


});








/* =========================
 ACTIVE NAV LINK
========================= */


const allSections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll(".navbar a");



window.addEventListener("scroll",()=>{


let current="";



allSections.forEach(section=>{


const sectionTop =
section.offsetTop - 150;



if(scrollY >= sectionTop){

current = section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.style.color="white";



if(link.getAttribute("href") === "#"+current){


link.style.color="#38bdf8";


}


});



});
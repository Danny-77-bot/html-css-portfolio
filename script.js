// Select button and body

const themeButton = document.getElementById("theme-toggle");

const body = document.body;


// Check saved theme

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    body.classList.add("light-mode");

    themeButton.textContent = "☀️";

}



// Button click

themeButton.addEventListener("click", ()=>{


    body.classList.toggle("light-mode");



    if(body.classList.contains("light-mode")){


        themeButton.textContent = "☀️";


        localStorage.setItem("theme","light");


    }

    else{


        themeButton.textContent = "🌙";


        localStorage.setItem("theme","dark");


    }



});
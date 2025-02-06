let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const skills = document.getElementById("Skills");
const btn = document.getElementById("btn");
btn.onclick = () => {
    if (skills.style.display === "none") {
     skills.style.display = "block";
      btn.textContent = "Read Less"; 
    } 
    else {
      skills.style.display = "none";
     btn.textContent = "Read More"; 
    }
  };

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['Frontend Developer', 'Backend Developer','Web Designer' ],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });



 let icon =document.getElementById("icon");
 icon.onclick=function () {
    document.body.classList.toggle("dark-theme");
    if (  document.body.classList.contains("dark-theme")) {
        icon.src="images/download__1_-removebg-preview.png";
    }
    else{
        icon.src="images/download-removebg-preview.png";
    }
 }


const burger = document.querySelector(".burger");

const closeNav = () => burger.style.width = "0%";
const openNav = () => burger.style.width = "100%";

const opennav = document.querySelector(".opennav");
opennav.addEventListener("click", openNav);

const closebtn = document.querySelector(".closebtn");
closebtn.addEventListener("click", closeNav);

const home = document.querySelector(".h");
home.addEventListener("click", closeNav);

const about = document.querySelector(".a");
about.addEventListener("click", closeNav);

const skills = document.querySelector(".s");
skills.addEventListener("click", closeNav);

const portfolio = document.querySelector(".p");
portfolio.addEventListener("click", closeNav);

const contacts = document.querySelector(".c");
contacts.addEventListener("click", closeNav);






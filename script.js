gsap.from("#img1", {y: -1000, opacity: 0, duration: 1.5})
gsap.from("#img2", {y: 1000, opacity: 0, duration: 1.5})

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const reloadBtn = document.querySelector("#reloadBtn")
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const text = document.querySelector("#text");

btn1.addEventListener("click", ocean);
btn2.addEventListener("click", earth);

//океан
function ocean() {
    img1.setAttribute("src", "images/2o.webp");
    img2.setAttribute("src", "images/3o.jpg");
    text.textContent = "Она будет счастлива?";
    btn1.innerHTML = "да";
    btn2.innerHTML = "нет";

    btn1.addEventListener("click", happyOcean);
    btn2.addEventListener("click", unhappyOcean);
}

function happyOcean() {
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "block";
    img3.setAttribute("src", "images/4o.jpg");
    text.textContent = "Ариэль будет проводить яркие и веселые дни в окружении семьи и друзей!";
    btn1.style.display = "none";
    btn2.style.display = "none";
    reloadBtn.style.display = "block";

    gsap.from("#img3", {opacity: 0, duration: 1})
}

function unhappyOcean() {
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "block";
    img3.setAttribute("src", "images/5o.jpeg");
    text.textContent = "Ариэль будет всю жизнь жалеть о том, что осталась жить в океане. Она никогда не забудет принца Эрика.";
    btn1.style.display = "none";
    btn2.style.display = "none";
    reloadBtn.style.display = "block";

    gsap.from("#img3", {opacity: 0, duration: 1})
}

//суша
function earth() {
    img1.setAttribute("src", "images/2e.jpg");
    img2.setAttribute("src", "images/3e.jpg");
    text.textContent = "Она будет счастлива?";
    btn1.innerHTML = "да";
    btn2.innerHTML = "нет";

    btn1.addEventListener("click", happyEarth);
    btn2.addEventListener("click", unhappyEarth);
}

function happyEarth() {
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "block";
    img3.setAttribute("src", "images/4e.jpg");
    text.textContent = "Ариэль и Эрик поженятся и у них родится дочь. Они проживут счастливую и долгую жизнь!";
    btn1.style.display = "none";
    btn2.style.display = "none";
    reloadBtn.style.display = 'block';

    gsap.from("#img3", {opacity: 0, duration: 1})
}

function unhappyEarth() {
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "block";
    img3.setAttribute("src", "images/5e.jpg");
    text.textContent = "Эрик женится на Урсуле. Ариэль навсегда потеряет голос и будет всю жизнь несчастна.";
    btn1.style.display = "none";
    btn2.style.display = "none";
    reloadBtn.style.display = 'block';

    gsap.from("#img3", {opacity: 0, duration: 1})
}

reloadBtn.addEventListener("click", ()=> {
    location.reload()
})
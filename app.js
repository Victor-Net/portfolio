// objects
const cardsAr = [
  {
    card: "portfolio",
    title: "Portfolio",
    img: "./images/portfolio.png",
    link: "https://victor-net.github.io/portfolio",
    text: "This is the current page containing the projects I have built.",
  },
  {
    card: "weather",
    title: "Weather App",
    img: "./images/weather.png",
    link: "https://victor-net.github.io/weather-app",
    text: "View the town, city or country you searched for and get the temperature, weather and the sunrise and sunset. Built using JavaScript, CSS, HTML and some Bootstrap",
  },
  {
    card: "menu",
    title: "Menu",
    img: "./images/js-menu.jpg",
    link: "https://victor-net.github.io/js-menu",
    text: "A menu for a restaurant or cafe. Built using JavaScript, HTML and CSS",
  },
  {
    card: "hand-clock-app",
    title: "Hand Clock App",
    img: "./images/clock.png",
    link: "https://victor-net.github.io/hand-clock-app",
    text: "Simple hand clock utilizing HTML, CSS and JavaScript.",
  },
  {
    card: "coffee",
    title: "Coffee Shop",
    img: "./images/coffee-shop.png",
    link: "https://victor-net.github.io/coffeebs5",
    text: "This is a simple website just to showcase some knowledge of Bootstrap.",
  },
];

// target where to display the cards i.e .projects
const projectsEl = document.querySelector(".projects");
const card = document.querySelector(".cards");
const timeEl = document.querySelector(".time");
timeEl.innerText = new Date().toDateString();

// Event listener for when dom is loaded
window.addEventListener("DOMContentLoaded", () => {
  showCards();
  console.log("DOMContentLoaded");
});

// display cards function
const showCards = () => {
  let showCard = cardsAr.map((card) => {
    return `<div class="card ${card.card}">
        <a href=${card.link} target="_blank">
        <img src=${card.img} alt=${card.alt}/>
        <div class="card-info">
          <h3>${card.title}</h3>
          <p>
            ${card.text}
            </p>
          </div>
          </a>
    </div>`;
  });
  showCard = showCard.join(""); // join method fixes the comma issue after every card
  projectsEl.innerHTML = showCard;

  // To remove link from portfolio
  // 
  // 
  
};

let date = document.querySelector(".date");
date.innerText = new Date().getFullYear();

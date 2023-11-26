// objects
const cardsAr = [
  {
    card: "portfolio",
    title: "Portfolio",
    img: "./images/portfolio.png",
    link: "",
    text: "This is the site with the projects I have done.",
  },
  {
    card: "weather",
    title: "Weather App",
    img: "./images/weather.png",
    link: "https://victor-net.github.io/weather-app",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, itaque doloremque tempora quia veniam expedita.",
  },
  {
    card: "menu",
    title: "Menu",
    img: "./images/ack.png",
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
        <img src=${card.img} alt=${card.alt}/>
        <div class="card-info">
          <h3>${card.title}</h3>
          <p>
            <a href=${card.link} target="_blank">${card.text}
            </a>
          </p>
      </div>
    </div>`;
  });
  showCard = showCard.join(""); // join method fixes the comma issue after every card
  projectsEl.innerHTML = showCard;

  // To remove link from portfolio
  // if (card.classList.contains("portfolio")) {
  //   card.classList.add()
  // }
};

let date = document.querySelector(".date");
date.innerText = new Date().getFullYear();

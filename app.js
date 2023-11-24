// objects
const cardsAr = [
  {
    card: 1,
    title: "Portfolio",
    img: "./images/portfolio.png",
    link: "https://victor-net.github.io/portfolio/",
    text: "This is the site with the projects I have done.",
  },
  {
    card: 2,
    title: "ACK Menu",
    img: "./images/ack.png",
    link: `https://victor-net.github.io/ack-menu/`,
    text: "A menu for a restaurant or cafe. Built using JavaScript, HTML and CSS",
  },
  {
    card: 3,
    title: "React",
    img: "./images/react.png",
    link: "",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, itaque doloremque tempora quia veniam expedita.",
  },
  {
    card: 4,
    title: "Hand Clock App",
    img: "./images/clock.png",
    link: "https://victor-net.github.io/hand-clock-app/",
    text: "Simple hand clock utilizing HTML, CSS and JavaScript.",
  },
  {
    card: 5,
    title: "Coffee Shop",
    img: "./images/coffee-shop.png",
    link: "https://victor-net.github.io/coffeebs5/",
    text: "This is a simple website just to showcase some knowledge of Bootstrap.",
  },
];

// target where to display the cards i.e .projects
const projectsEl = document.querySelector(".projects");
const card = document.querySelector(".cards");

// Event listener for when dom is loaded
window.addEventListener("DOMContentLoaded", function () {
  showCards();
  console.log("DOMContentLoaded");
});

// display cards function
const showCards = () => {
  let showCard = cardsAr.map(function (card) {
    return `<div class="card">
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
};

let date = document.querySelector(".date");
date.innerText = new Date().getFullYear();

//
// strt 10nov15th23wed
// end 22:45nov15th23wed

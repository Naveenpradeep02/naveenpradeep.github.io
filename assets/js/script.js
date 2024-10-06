var typed = new Typed(".auto-type2", {
  strings: ["Frontent developer", "backend developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

let maincontainer = document.querySelector(".main-container");
let hero = document.querySelector(".hero");

const handleClick = () => {
  maincontainer.classList.toggle("show-page");
  hero.classList.toggle("show-page");
};
function togglemenu() {
  const menuIcon = document.querySelector(".handburger-icon");
  const menuList = document.querySelector(".menu-list");
  menuList.classList.toggle("open");
  menuIcon.classList.toggle("open");
}
ScrollReveal().reveal(
  ".bg-profile,.pic-container,.title,.section-p1,.pic-container-2",
  {
    delay: 200,
    direction: "top",
    distance: "100px",
  }
);
ScrollReveal().reveal(
  ".content,.section-text,.text-container,.card1,.card3,.cont-col1",
  {
    delay: 500,
    origin: "left",
    distance: "100px",
  }
);
ScrollReveal().reveal(".det-container,.card2,.cont-col2", {
  delay: 500,
  origin: "right",
  distance: "100px",
});
ScrollReveal().reveal(".bgimg", {
  delay: 600,
  origin: "top",
  distance: "100px",
});
ScrollReveal().reveal("", {
  delay: 1200,
  duration: 1500,
  distance: "100px",
});

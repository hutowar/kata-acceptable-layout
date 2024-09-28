// SCROLL CATEGORY LIST
const scrollableEl = document.querySelector(".category-list");
const scrollableEls = document.querySelectorAll(".category-list a");
let isDragging = false;
const dragging = (e) => {
  if (!isDragging) return;
  scrollableEl.scrollLeft -= e.movementX;
};
scrollableEls.forEach((elem) => {
  elem.addEventListener("mousedown", (e) => {
    e.preventDefault();
  });
});
scrollableEl.addEventListener("mousedown", () => (isDragging = true));
scrollableEl.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", () => (isDragging = false));
//ACTIVE CLASS CATEGORY LIST
scrollableEls.forEach((el) => {
  el.addEventListener("click", function () {
    scrollableEls.forEach(element => {
      element.parentNode.classList.remove("category-list__item--active");
    });
    el.parentNode.classList.add("category-list__item--active");
  });
});

const readmoreEl = document.querySelector('.about__read-more');
readmoreEl.addEventListener('click', function (e) {
  document.querySelector('.about__text').classList.toggle("about__paragraph--open");
});
//BURGER MENU TOGGLE
const burgerMenuBtns = document.querySelectorAll('.burger-menu');
burgerMenuBtns.forEach(burgerMenuBtn => {
  burgerMenuBtn.addEventListener('click', function (e) {
    burgerMenuBtns.forEach(e => e.classList.toggle("burger-menu--active"))
    // burgerMenuBtn.classList.toggle("burger-menu--active");
    document.querySelector('.menu').classList.toggle("menu--open");
  });
});
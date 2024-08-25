const nav__menu = document.getElementById("nav__menu");
const menu = document.getElementById("menu__mobile");
const menu__close = document.getElementById("menu__close");

nav__menu.addEventListener("click", () => {
  menu.classList.add("menu__active");
});

menu__close.addEventListener("click", () => {
  menu.classList.remove("menu__active");
});

const form = document.getElementById("form");
const form__input = document.getElementById("form__input");
const email__input = document.getElementById("email__input");
const error__icon = document.getElementById("error__icon");
const error__message = document.getElementById("error__message");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email__input.value.trim() === "") {
    form__input.classList.add("error");
    error__icon.style.display = "block";
    error__message.style.display = "block";
  } else {
    form__input.classList.remove("error");
    error__icon.style.display = "none";
    error__message.style.display = "none";
  }
});

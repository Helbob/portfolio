const btn = document.querySelector("button");
const ul = document.querySelector("nav");
const nop = document.querySelector("#fjern");
const overlay = document.querySelector("#overlayish");
function toggleMenu() {
  ul.classList.toggle("shown");

  const menu = ul.classList.contains("shown");

  if (menu) {
    btn.classList.add("open");
    overlay.classList.add("overlay");
  } else {
    btn.classList.remove("open");
    overlay.classList.remove("overlay");
  }
}

btn.addEventListener("click", toggleMenu);

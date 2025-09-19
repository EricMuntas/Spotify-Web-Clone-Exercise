window.addEventListener("load", () => {
  document
    .getElementById("menu-mobile-btn")
    .addEventListener("click", openMenu);
});

function openMenu() {
  var menu = document.getElementById("menu-mobile");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

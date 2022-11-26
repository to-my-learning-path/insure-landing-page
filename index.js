var toggleButton = document.querySelector(".toggle-button");
var mainNav = document.querySelector(".main-nav");

toggleButton.addEventListener("click", () => {
  var toggleButtonIsOpen =
    toggleButton.getAttribute("aria-expanded") === "true";
  var mainNavIsOpen = mainNav.getAttribute("data-visible") === "true";

  toggleButton.setAttribute("aria-expanded", !toggleButtonIsOpen);
  mainNav.setAttribute("data-visible", !mainNavIsOpen);
});

let menuBtn = document.querySelector(".menu-btn img");
let closeBtn = document.querySelector(".res-navigation ul li span");
let resNav = document.querySelector(".res-navigation");
let body = document.querySelector("body");
function responsiveNavigation() {
  menuBtn.addEventListener("click", () => {
    resNav.style.right = "0%";
    body.style.overflowY = "hidden";
    resNav.style.overflowY = "hidden%";

    res
  });

  closeBtn.addEventListener("click", () => {
    resNav.style.right = "-100%";
  });
}

responsiveNavigation();

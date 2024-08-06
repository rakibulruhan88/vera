let menuBtn = document.querySelector(".menu-btn img");
let closeBtn = document.querySelector(".res-navigation ul li span");
let resNav = document.querySelector(".res-navigation");
function responsiveNavigation() {
  menuBtn.addEventListener("click", () => {
    resNav.style.right = "0%";
  });

  closeBtn.addEventListener("click", () => {
    resNav.style.right = "-100%";
  });
}

responsiveNavigation();

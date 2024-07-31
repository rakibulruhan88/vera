let menuBtn = document.querySelector(".menu-btn img");
let closeBtn = document.querySelector(".res-navigation ul li span");
let resNav = document.querySelector(".hide");
function responsiveNavigation() {
  menuBtn.addEventListener("click", () => {
    resNav.style.margin = "0";
  });

  closeBtn.addEventListener("click", () => {
    resNav.style.margin = "-1000px";
  });
}

responsiveNavigation();

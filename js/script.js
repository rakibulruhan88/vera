let menuBtn = document.querySelector(".menu-btn img");
let closeBtn = document.querySelector(".res-navigation ul li span");
let resNav = document.querySelector(".hide");
function responsiveNavigation() {
  menuBtn.addEventListener("click", () => {
    resNav.style.right = "-13%";
  });

  closeBtn.addEventListener("click", () => {
    resNav.style.right = "-100%";
  });
}

responsiveNavigation();

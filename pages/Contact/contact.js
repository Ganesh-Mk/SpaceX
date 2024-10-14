const menuItems = Array.from(document.querySelectorAll(".menu-navItems"));
menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("mouseover", () => {
    menuItems.forEach((item, i) => {
      if (i !== index) item.style.opacity = 0.3;
    });
  });

  menuItem.addEventListener("mouseleave", () => {
    menuItems.forEach((item) => (item.style.opacity = 1));
  });
});

let toggleBool = true;
let topStroke = document.querySelector("#topStroke");
let midStroke = document.querySelector("#midStroke");
let bottomStroke = document.querySelector("#bottomStroke");

function toggle() {
  if (toggleBool) {
    document.querySelector(".menuBar").style.transform = "translateX(0vw)";
    topStroke.style.transform = "rotate(45deg)";
    midStroke.style.opacity = "0";
    bottomStroke.style.transform = "rotate(-45deg)";
    toggleBool = false;
  } else {
    document.querySelector(".menuBar").style.transform = "translateX(105vw)";
    topStroke.style.transform = "rotate(0deg)";
    midStroke.style.opacity = "1";
    bottomStroke.style.transform = "rotate(0deg)";
    toggleBool = true;
  }
}

let menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("mouseover", () => {
  document.querySelector(".cursor-circle").style.border = "5px solid grey";
  document
    .querySelector(".cursor-circle")
    .style.setProperty("--circle-size", "60px");

  menuBtn.addEventListener("mouseleave", () => {
    document.querySelector(".cursor-circle").style.border = "1px solid white";
    document
      .querySelector(".cursor-circle")
      .style.setProperty("--circle-size", "40px");
  });
});

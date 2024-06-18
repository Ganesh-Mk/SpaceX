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
let cancel = document.querySelector(".cancel");
let right = document.querySelector(".right");

cancel.style.display = "none";

right.addEventListener("click", () => {
  document.querySelector(".menuBar").style.transform = "translateX(0vw)";
  right.style.display = "none";
  cancel.style.display = "block";
});

cancel.addEventListener("click", () => {
  document.querySelector(".menuBar").style.transform = "translateX(105vw)";
  right.style.display = "flex";
  cancel.style.display = "none";
});

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

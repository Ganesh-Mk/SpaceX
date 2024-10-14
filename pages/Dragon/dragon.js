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

var page1 = gsap.timeline({
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page1",
    start: "top 15%",
    end: "top 15%",
  },
});

page1.from(
  ".left img",
  {
    x: -400,
    duration: 0.5,
  },
  "nav"
);
page1.from(
  ".right",
  {
    x: 400,
    duration: 0.5,
  },
  "nav"
);

page1.from(".page1 h1", {
  opacity: 0,
  y: 100,
  duration: 0.8,
});
page1.from(".page1 h3", {
  opacity: 0,
  y: 10,
  duration: 0.8,
});

var page2 = gsap.timeline({
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2",
    start: "top 85%",
    end: "top -100%",
    scrub: 3,
  },
});

page2.to(
  ".dragonImg",
  {
    y: -1000,
  },
  "page2"
);

page2.from(
  ".dragonP",
  {
    y: 100,
  },
  "page2"
);
page2.to(
  ".dragonP",
  {
    lineHeight: "10vh",
  },
  "page2"
);

var backImage = gsap.timeline({
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2",
    start: "top 90%",
    marker: true,
    end: "top -100%",
    scrub: 2,
  },
});
backImage.to(".page1 img", {
  transform: "rotate(50deg)",
  height: "120vh",
});

var page3 = gsap.timeline({
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3",
    start: "top 1%",
    end: "top -100%",
    scrub: 2,
  },
});

page3.to(
  ".numsLeft",
  {
    x: -200,
    opacity: 0,
    duration: 1,
  },
  "nums"
);

function counterFun() {
  let h1 = document.querySelector(".counter1");
  let h2 = document.querySelector(".counter2");
  let h3 = document.querySelector(".counter3");
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;

  let counterInterval = setInterval(() => {
    if (counter1 <= 39) h1.innerHTML = counter1++;
    if (counter2 <= 44) h2.innerHTML = counter2++;
    if (counter3 <= 23) h3.innerHTML = counter3++;
    if (counter1 === 39 && counter2 === 44 && counter3 === 23) {
      clearInterval(counterInterval);
    }
  }, 25);
}
gsap.to("#numCenterH1", {
  onStart: counterFun,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3",
    start: "top 50%",
    end: "top -100%",
    scrub: 2,
  },
});
page3.to(
  "#numCenterH1",
  {
    opacity: 0,
    duration: 1,
    position: "absolute",
    fontSize: "80vw",
  },
  "nums"
);

page3.to(
  "#numCenterH2",
  {
    opacity: 0,
    duration: 1,
    fontSize: "0vw",
    duration: 0.00001,
    scrollTrigger: {
      scroller: ".main",
      trigger: ".page3",
      start: "top 20%",
      end: "top -100%",
      scrub: false,
    },
  },
  "nums"
);

gsap.to("#numCenterH1", {
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3",
    start: "top 1%",
    end: "top -100%",
    scrub: 2,
  },
});
page3.to(
  ".numsRight",
  {
    x: 200,
    opacity: 0,
    duration: 1,
  },
  "nums"
);

var page4 = gsap.timeline({
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page4",
    start: "top 55%",
    end: "top 5%",
    scrub: 2,
  },
});

function increaseSize() {
  if (window.innerWidth <= 600) {
    document.getElementById("page4H1").style.fontSize = "8vw";
    document.getElementById("page4P").style.fontSize = "3.3vw";
    document.getElementById("page4Button").style.fontSize = "2vh";
    document.querySelector(".page4").style.gridTemplateColumns = "40% 60%";
  }
}
page4.from(".page4 h1", {
  opacity: 0,
  onStart: increaseSize,
  x: 200,
});
page4.from(".page4 p", {
  opacity: 0,
  x: 200,
});
page4.from(".page4 button", {
  opacity: 0,
  x: 200,
});

var page9 = gsap.timeline({
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page9",
    start: "top 55%",
    end: "top 5%",
    scrub: 1,
  },
});

page9.from(".page9 .line", {
  opacity: 0,
  height: 0,
  duration: 0.8,
});
page9.from(".page9 p", {
  opacity: 0,
  y: 100,
  duration: 0.8,
});
page9.from(".page9 button", {
  opacity: 0,
  y: 200,
  duration: 0.8,
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

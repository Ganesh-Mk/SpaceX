let toggleBool = true
document.querySelector('.right').addEventListener('click', () => {
  console.log('Hello')
  let menuBar = document.querySelector('.menuBar')
  let top = document.getElementById('topStroke')
  let mid = document.getElementById('midStroke')
  let bottom = document.getElementById('bottomStroke')

  if (toggleBool) {
    menuBar.style.transform = 'translateX(0vw)'
    mid.style.opacity = 0

    top.classList.add('rotateTop')
    bottom.classList.add('rotateBottom')

    toggleBool = false
  } else {
    menuBar.style.transform = 'translateX(105vw)'
    mid.style.opacity = 100

    top.classList.remove('rotateTop')
    bottom.classList.remove('rotateBottom')
    toggleBool = true
  }
})

var page1 = gsap.timeline({
  scrollTrigger: {
    scroller: '.main',
    trigger: '.page1',
    start: 'top 15%',
    end: 'top 15%',
  },
})

page1.from(
  '.left img',
  {
    x: -400,
    duration: 0.5,
  },
  'nav',
)
page1.from(
  '.right',
  {
    x: 400,
    duration: 0.5,
  },
  'nav',
)

page1.from('.page1 h1', {
  opacity: 0,
  y: 100,
  duration: 0.8,
})
page1.from('.page1 h3', {
  opacity: 0,
  y: 10,
  duration: 0.8,
})

var page2 = gsap.timeline({
  scrollTrigger: {
    scroller: '.main',
    trigger: '.page2',
    start: 'top 55%',
    end: 'top -20%',
    scrub: true,
  },
})

page2.from('.page2 h2', {
  opacity: 0,
  y: 100,
  duration: 0.8,
})
page2.from('.page2 h3', {
  opacity: 0,
  y: 100,
  duration: 0.2,
})

var page3 = gsap.timeline({
  scrollTrigger: {
    scroller: '.main',
    trigger: '.page3',
    start: 'top 55%',
    end: 'top 5%',
    scrub: true,
  },
})

page3.from('.page3 h1', {
  opacity: 0,
  x: 100,
  duration: 0.8,
})
page3.from('.page3 #marsInfoP', {
  opacity: 0,
  x: 100,
  duration: 0.8,
})
page3.from(
  '.page3 #marsTableLeft',
  {
    opacity: 0,
    x: 100,
    duration: 0.8,
  },
  'table',
)
page3.from(
  '.page3 #marsTableRight',
  {
    opacity: 0,
    x: -100,
    duration: 0.8,
  },
  'table',
)

var page4 = gsap.timeline()
page4.to('.page4 h1', {
  rotation: 80,
  fontSize: '118vw',
  opacity: 20,
  scrollTrigger: {
    scroller: '.main',
    trigger: '.page4',
    marker: true,
    start: 'top 15%',
    end: 'top -100%',
    scrub: 2,
  },
})

var page5 = gsap.timeline({
  scrollTrigger: {
    scroller: '.main',
    trigger: '.page5',
    start: 'top 50%',
    end: 'top 5%',
    scrub: 1,
  },
})

page5.from('.page5 h1', {
  opacity: 0,
  x: -200,
  duration: 0.8,
})
page5.from('.page5 p', {
  opacity: 0,
  x: -200,
  duration: 5,
})
page5.from('.page5 button', {
  opacity: 0,
  x: -200,
  duration: 0.5,
})

var page6 = gsap.timeline({
  scrollTrigger: {
    scroller: '.main',
    trigger: '.page6',
    start: 'top 55%',
    end: 'top 5%',
    scrub: true,
  },
})

page6.from('.page6 h1', {
  opacity: 0,
  y: 200,
  duration: 0.8,
})
page6.from('.page6 h2', {
  opacity: 0,
  y: 200,
  duration: 0.8,
})

var page7 = gsap.timeline({
  scrollTrigger: {
    scroller: '.main',
    trigger: '.page7',
    start: 'top 55%',
    end: 'top 5%',
    scrub: true,
  },
})

page7.from('.page7 h1', {
  opacity: 0,
  y: 200,
  duration: 0.8,
})
page7.from('.page7 h2', {
  opacity: 0,
  y: 200,
  duration: 0.8,
})
var page8 = gsap.timeline({
  scrollTrigger: {
    scroller: '.main',
    trigger: '.page8',
    start: 'top 55%',
    end: 'top 5%',
    scrub: 1,
  },
})

page8.from('.page8 h1', {
  opacity: 0,
  x: -200,
  duration: 0.8,
})
page8.from('.page8 p', {
  opacity: 0,
  x: -200,
  duration: 0.8,
})
page8.from('.page8 button', {
  opacity: 0,
  x: -200,
  duration: 0.8,
})

var page9 = gsap.timeline({
  scrollTrigger: {
    scroller: '.main',
    trigger: '.page9',
    start: 'top 55%',
    end: 'top 5%',
    scrub: 1,
  },
})

page9.from('.page9 .line', {
  opacity: 0,
  height: 0,
  duration: 0.8,
})
page9.from('.page9 p', {
  opacity: 0,
  y: 100,
  duration: 0.8,
})
page9.from('.page9 button', {
  opacity: 0,
  y: 200,
  duration: 0.8,
})

// #menuItem1:hover +  #menuItem2{
//     opacity: 0.2;
//   }

const menuItems = Array.from(document.querySelectorAll('.menu-navItems'))
menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener('mouseover', () => {
    menuItems.forEach((item, i) => {
      if (i !== index) item.style.opacity = 0.3
    })
  })

  menuItem.addEventListener('mouseleave', () => {
    menuItems.forEach((item) => (item.style.opacity = 1))
  })
})

const stepsH1 = Array.from(document.querySelectorAll('.stepsH1'))
stepsH1.forEach((menuItem, index) => {
  menuItem.addEventListener('mouseover', () => {
    stepsH1.forEach((item, i) => {
      if (i !== index) item.style.opacity = 0.3
    })
  })

  menuItem.addEventListener('mouseleave', () => {
    stepsH1.forEach((item) => (item.style.opacity = 1))
  })
})

let menuBtn = document.querySelector('#menuBtn')
menuBtn.addEventListener('mouseover', () => {
  document.querySelector('.cursor-circle').style.border = '5px solid grey'
  document
    .querySelector('.cursor-circle')
    .style.setProperty('--circle-size', '60px')

  menuBtn.addEventListener('mouseleave', () => {
    document.querySelector('.cursor-circle').style.border = '1px solid white'
    document
      .querySelector('.cursor-circle')
      .style.setProperty('--circle-size', '40px')
  })
})

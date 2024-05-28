let toggleBool = true
let cancel = document.querySelector('.cancel')
let right = document.querySelector('.right')

cancel.style.display = 'none'

right.addEventListener('click', () => {
  document.querySelector('.menuBar').style.transform = 'translateX(0vw)'
  right.style.display = 'none'
  cancel.style.display = 'block'
})

cancel.addEventListener('click', () => {
  document.querySelector('.menuBar').style.transform = 'translateX(105vw)'
  right.style.display = 'flex'
  cancel.style.display = 'none'
})
gsap.to('#car', {
  height: '35vw',
  scrollTrigger: {
    scroller: '.main',
    trigger: '.page2',
    start: 'top 99%',
    end: 'top 0%',
    scrub: 2,
  },
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
    start: 'top 75%',
    end: 'top -100%',
    scrub: 3,
  },
})

page2.to(
  '.rocketImgContainer',
  {
    y: -1000,
    x: 500,
  },
  'page2',
)

page2.from(
  '.rocketP',
  {
    y: 100,
  },
  'page2',
)
page2.to(
  '.rocketP',
  {
    lineHeight: '6vh',
  },
  'page2',
)

var page3 = gsap.timeline({
  scrollTrigger: {
    scroller: '.main',
    trigger: '.page3',
    start: 'top 1%',
    end: 'top -100%',
    scrub: 2,
  },
})

function counter() {
  let num1 = document.querySelector('.num1')
  let num2 = document.querySelector('.num2')
  let num3 = document.querySelector('.num3')
  let counter1 = 0
  let counter2 = 0
  let counter3 = 0
  let timer = setInterval(() => {
    if (counter1 <= 9) num1.innerHTML = counter1++
    if (counter2 <= 17) num2.innerHTML = counter2++
    if (counter3 <= 14) num3.innerHTML = counter3++
    if (counter1 === 9 && counter2 === 17 && counter3 === 14) {
      clearInterval(timer)
    }
  }, 80)
}
gsap.to('.num1', {
  onStart: counter,
  scrollTrigger: {
    scroller: '.main',
    trigger: '.page3',
    start: 'top 80%',
    end: 'top 50%',
    scrub: 2,
  },
})

page3.to(
  '.numsLeft',
  {
    x: -400,
    opacity: 0,
    duration: 1,
  },
  'nums',
)
page3.to(
  '.numsCenter',
  {
    y: -400,
    opacity: 0,
    duration: 1,
  },
  'nums',
)
page3.to(
  '.numsRight',
  {
    x: 400,
    opacity: 0,
    duration: 1,
  },
  'nums',
)

var page4 = gsap.timeline({
  scrollTrigger: {
    scroller: '.main',
    trigger: '.page4',
    start: 'top 35%',
    end: 'top -100%',
    scrub: 2,
  },
})

page4.to('#rocketVideo', {
  width: '25vw',
})

var page5 = gsap.timeline({
  scrollTrigger: {
    scroller: '.main',
    trigger: '.page5',
    start: 'top 15%',
    end: 'top -100%',
    scrub: 3,
  },
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

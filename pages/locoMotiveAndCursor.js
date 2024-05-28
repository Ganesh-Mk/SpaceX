function locoMotiveScroll() {
  gsap.registerPlugin(ScrollTrigger)

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
  })
  locoScroll.on('scroll', ScrollTrigger.update)

  ScrollTrigger.scrollerProxy('.main', {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
    pinType: document.querySelector('.main').style.transform
      ? 'transform'
      : 'fixed',
  })

  ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
  ScrollTrigger.refresh()
}
locoMotiveScroll()

function cursorEffect() {
  console.clear()

  const cursorElement = document.querySelector('.cursor')
  const circleElement = document.querySelector('.cursor-circle')

  const mouse = { x: 0, y: 0 } // track mouse position
  const previousMouse = { x: 0, y: 0 } // keep mouse position from previous frame
  const cursor = { x: 0, y: 0 } // track custom cursor position
  let currentScale = 0 // track current scale value
  let currentAngle = 0 // track current angle value

  // Update mouse position on mousemove event
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x
    mouse.y = e.y
  })

  // PARAMETERS
  // Speed smoothing. Should be between 0 and 1 (0 = smoother, 1 = instant)
  const speed = 0.17
  // Max velocity for each axis. let guess that it should be 100
  const maxAxisVelocity = 100
  // Calculate the maximum directional velocity w/ Pythagorean theorem
  const maxVelocity = Math.sqrt(maxAxisVelocity ** 2 + maxAxisVelocity ** 2)
  // Min scale value for transform property
  const minScale = 0.5
  // A value by which a squeeze will be intensified
  const squeezeIntensity = 4

  // Clamp helper
  const clamp = (value, minMax) => {
    return Math.min(Math.max(value, -minMax), minMax)
  }

  // Start animation
  const tick = () => {
    // MOVE
    // (mouse.x - cursor.x) calculates the difference between the current x-coordinate of the mouse and the current x-coordinate of the custom cursor.
    // (mouse.x - cursor.x) * speed multiplies the difference by the speed factor, which determines how quickly the custom cursor should move towards the mouse position
    cursor.x += (mouse.x - cursor.x) * speed
    cursor.y += (mouse.y - cursor.y) * speed
    // Update cursor element's position w/ transform property
    cursorElement.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`

    // SQUEEZE
    // 1. Get delta mouse position = difference between current mouse position and position from previous frame.
    const deltaMouseX = mouse.x - previousMouse.x
    const deltaMouseY = mouse.y - previousMouse.y
    // Update previous mouse position
    previousMouse.x = mouse.x
    previousMouse.y = mouse.y
    // 2. Get mouse velocity in both directions. Same as delta mouse positin, but we just clamp it.
    const velocityX = clamp(deltaMouseX, maxAxisVelocity)
    const velocityY = clamp(deltaMouseY, maxAxisVelocity)
    // 3. Get final mouse velocity w/ Pythagorean theorem
    const mouseVelocity = Math.sqrt(velocityX ** 2 + velocityY ** 2)
    // 4. To squeeze we need to use transform where we can assign a value between 0 and 1. But I think it's good to leave the min squeeze value 0.5
    // First let's intesify the squeeze by multipling it by any number (4 is pretty good), but still keep it in a range between 0 and max allowed velocity
    // clamp(mouseVelocity * squeezeIntensity, maxVelocity)
    // Then let's convert it to a range between 0 and 1 by dividing it by maxVelocity
    // clamp(mouseVelocity * squeezeIntensity, maxVelocity) / maxVelocity
    // FInally multiply it by minimum desired scale
    const scaleValue =
      (clamp(mouseVelocity * squeezeIntensity, maxVelocity) / maxVelocity) *
      minScale
    // 5. To make scaling smooth let's use the same method as for the cursor's position
    currentScale += (scaleValue - currentScale) * speed
    // 6. Finally change transform property
    // circleElement.style.transform = `scale(${1 + currentScale}, ${1 - currentScale})`
    // We want to keep the change in a separate string value, because will need to rotate the circle together with scaling.
    let scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`

    // ROTATE
    // 1. Get angle. Use deltaMouseX and deltaMouseY from above
    const angle = (180 * Math.atan2(deltaMouseY, deltaMouseX)) / Math.PI
    // 2. Finally change transform property
    // circleElement.style.transform = `rotate(${angle}deg) ${scaleTransform}`;
    // ... Nope, it's too shaky on a low mouse velocity, so need to rotate only when going above certain threshold. I picked 5 by playing around
    if (mouseVelocity > 5) {
      currentAngle = angle
    }
    // 2. (for real now) Update transform property here
    circleElement.style.transform = `rotate(${currentAngle}deg) ${scaleTransform}`

    // Call function on next frame
    window.requestAnimationFrame(tick)
  }

  tick()
}
cursorEffect()

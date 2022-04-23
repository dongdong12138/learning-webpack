import helloWorld from './hello-world.js'
import imgsrc from './assets/img-1.jpg'
import svgsrc from './assets/svg-1.svg'
// import exampleText from './assets/example.txt'
import pngsrc from './assets/img-2.png'

helloWorld()

// const img = document.createElement('img')
// img.src = imgsrc
// img.width = 400
// document.body.appendChild(img)

// const img2 = document.createElement('img')
// img2.src = svgsrc
// document.body.appendChild(img2)

// const block = document.createElement('div') 
// block.style.cssText = `width: 200px; height: 200px; background: aliceblue` 
// block.textContent = exampleText 
// document.body.appendChild(block)

const img3 = document.createElement('img')
img3.width = 200
img3.src = pngsrc
document.body.appendChild(img3)
function getRandomRGB() {
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255); 
  let green = Math.floor(Math.random() * 255);
  return `rgb(${red},${blue},${green})`;
}


function createGrid(choice){

  for (let i = 0; i < 64 ** 2; i++) {
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('pixel');
  container.appendChild(content);
  }
}


function pencil(){
  const header = document.querySelector('#Header');
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => pixel.setAttribute('style', 'background: black; opacity: .00;'));
  pixels.forEach(pixel => pixel.addEventListener('mouseover', function (e){
    e.target.style.opacity -= -.1
    e.target.style.background = 'black';})
  )
}

function rgb(){
  const header = document.querySelector('#Header');
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => pixel.setAttribute('style', 'background: lightgray; opacity: 1.00;'));
  pixels.forEach(pixel => pixel.addEventListener('mouseover', function (){
    pixel.style.background = getRandomRGB();
  }))
}

function pen(){
  const header = document.querySelector('#Header');
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => pixel.setAttribute('style', 'background: lightgray; opacity: 1.00;'));
  pixels.forEach(pixel => pixel.addEventListener('mouseover', function (){
    pixel.style.background = 'black';
  }))
}

createGrid();



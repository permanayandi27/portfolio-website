const navToggle = document.querySelector('.nav-toggle');

const linksContainer = document.querySelector('.links-container');

const links = document.querySelector('.links');

navToggle.addEventListener('click', ()=>{
  console.log('click')
  const containerHeight = linksContainer.getBoundingClientRect();

  console.log(containerHeight);
  
})

document.querySelector('.toge').addEventListener('click', ()=>{
  console.log('click');
})
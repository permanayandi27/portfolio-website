//Javascript for tab navigation horizontal scroll buttons
const btnLeft = document.querySelector('.left-btn');
const btnRight = document.querySelector('.right-btn');
const tabMenu = document.querySelector('.tab-menu');

const iconVisibility = () =>{
  let scrollLeftValue = tabMenu.scrollLeft;

  console.log(scrollLeftValue);

  let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

console.log(tabMenu.scrollWidth)
console.log(tabMenu.clientWidth)
  console.log(scrollableWidth)

  btnLeft.style.display = scrollLeftValue > 0 ? 'block': 'none';
  btnRight.style.display = scrollableWidth > scrollLeftValue ? 'block' : 'none';
}

btnRight.addEventListener('click', ()=>{
  tabMenu.scrollLeft += 150;
  
  setTimeout(()=> iconVisibility(), 50);
});

btnLeft.addEventListener('click', ()=>{
  tabMenu.scrollLeft -= 150;

  setTimeout(()=> iconVisibility(), 50);
});

window.onload = function(){
  btnRight.style.display = tabMenu.scrollwidth > tabMenu.clientWidth ||tabMenu.scrollWidth >= window.innerWidth ? 'block' : 'none';

  btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? '' : 'none';
  

}

window.onresize = function(){
  btnRight.style.display = tabMenu.scrollwidth > tabMenu.clientWidth ||tabMenu.scrollWidth >= window.innerWidth ? 'block' : 'none';

  btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? '' : '';

}


const navToggle = document.querySelector('.nav-toggle');

const linksContainer = document.querySelector('.links-container');

const links = document.querySelector('.links');


navToggle.addEventListener('click', ()=>{
  const containerHeight = linksContainer.getBoundingClientRect();
  console.log(containerHeight)
});

const navbar = document.getElementById('nav');

const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', ()=>{
  const scrollHeight = window.pageYOffset;

  console.log(scrollHeight);
  const navHeight = navbar.getBoundingClientRect().height;

  console.log(navHeight);

  if(scrollHeight > navHeight){
    navbar.classList.add('fixed-nav');
  }else {
    navbar.classList.remove('fixed-nav');
  }

  if(scrollHeight > 500){
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link');
  }
});

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link)=>{
  link.addEventListener('click', (e)=>{
    // prevent default
    e.preventDefault();

    // navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    
    const element = document.getElementById(id);

    //calculate the heights

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    console.log(element.offsetTop)

   if(!fixedNav){
    position = position - navHeight;

   }

   /*if(navHeight > 82){
    position = position + containerHeight;
   }
  */

    

    window.scrollTo({
       top:position
     
    });

    linksContainer.style.height = 0;


  })
})
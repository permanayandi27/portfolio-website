const typingText = document.querySelector('.typing-text p'),
inpField = document.querySelector('.wrapper .input-field');



/*function randomParaghraph(){
  let randIndex = Math.floor(Math.random() * paraghraphs.length);
  console.log(paraghraphs[randIndex].split());
  
}

randomParaghraph();
*/

function randomParaghraph(){
  let cartSplit = [];
  let randIndex = Math.floor(Math.random() * paraghraphs.length);

  paraghraphs.forEach((text, index)=>{
    if(randIndex === index){
      cartSplit.push(text);
    }
  })
  console.log(cartSplit);

  cartSplit.forEach((text)=>{
    const split = text.split('');
    cartSplit = split;
  });

  console.log(cartSplit)

  let htmlTyping = '';

  cartSplit.forEach(character => htmlTyping += `<span>${character}</span>`);

  typingText.innerHTML = htmlTyping;

  document.addEventListener('keydown', () => inpField.focus());
 

}
randomParaghraph();
 let countCharacters = 0;
 let countWords = 0;
 let countMistake = 0;
 let timeSeconds = 60;

 typingText.addEventListener('click',()=>{
  inpField.focus()
  setInterval(()=>{
    timeSeconds--;
    if(timeSeconds < 1){
      timeSeconds = 0;
      
    }
    

    document.querySelector('.time-left').innerText = timeSeconds;
  },1000)
 })


function initTyping(){


  let value = inpField.value.split('');
  
  const characters = typingText.querySelectorAll('span')[value.length - 1];

  
  if(value[value.length -1] === ' ' && characters.innerText === ' ' && timeSeconds !== 0){
    characters.classList.add('correct');
  }else if(value[value.length - 1] === characters.innerText && characters.innerText !== ' ' && timeSeconds !== 0){
    characters.classList.add('correct');
    
    countCharacters++;
    

    
  }else if(value[value.length - 1] !== characters.innerText && characters.innerText !== ' ' && timeSeconds !== 0){
    characters.classList.add('incorrect')
    countMistake++
  }else if(timeSeconds !== 0){
    characters.classList.add('incorrect-space');
    countMistake++
  }
  
  

  document.querySelector('.count-cpm').innerText = countCharacters;

  document.querySelector('.count-mistake').innerText = countMistake;
  console.log(value);

  if(value[value.length -1] === ' ' && characters.innerText === ' ' && timeSeconds !== 0){
    countWords++;
  }

  document.querySelector('.count-wpm').innerText = countWords;

  

  console.log(value.length)
}
inpField.addEventListener('input', initTyping);

const lowerCase = ['Apel', 'Anggur'];

console.log(lowerCase[0].toUpperCase());




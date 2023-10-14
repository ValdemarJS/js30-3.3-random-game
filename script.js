const cat = document.getElementById('cat');
const dog = document.getElementById('dog'); 

document.addEventListener('keydown', function(e) {
  jump();
});

function jump() {
  if (cat.classList != 'jump') {
    cat.classList.add('jump')
  }
  setTimeout( function() {
    cat.classList.remove('jump')
  }, 300)
} 

let isAlive =setInterval(function() {
  let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue('top'));
  let dogLeft =  parseInt(window.getComputedStyle(dog).getPropertyValue('left'));
  
  if(dogLeft < 70 && dogLeft > 0 && catTop >= 140) {
    alert ('GAME OVER!!!')
    location.reload();
    let score = document.querySelector('#score');
    let scoreLocal = JSON.stringify(score);
    localStorage.setItem('Result', scoreLocal);
    
  }
}, 10)

let score = document.querySelector('#score');

let startCountUp = setInterval(countUp, 0);


let totalScore = 0;

document.addEventListener('DOMContentLoaded', renderGame());

function renderGame() {
countUp();
};

function countUp(){
  totalScore++;
  score.innerText = totalScore;
};


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
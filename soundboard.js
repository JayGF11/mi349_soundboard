var arrowButtonElement = document.getElementById('arrow-button')
var bubbleButtonElement = document.getElementById('bubble-button')
var buzzerButtonElement = document.getElementById('buzzer-button')

arrowButtonElement.addEventListener('click', function () {
  console.log('I was clicked!')
})

bubbleButtonElement.addEventListener('click', function () {
  console.log('I was clicked!')
})

buzzerButtonElement.addEventListener('click', function () {
  console.log('I was clicked!')
})

function playSound(sound) {
  var theSound = document.getElementById(sound);
  theSound.Play();
}
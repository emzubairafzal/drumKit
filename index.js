var buttonList = document.querySelectorAll(".drum");

for (var i=0; i<buttonList.length; i++) {
  buttonList[i].addEventListener('click', getClicked);
}

function getClicked() {
  if (this.innerHTML === 'w') {
    playAudio('./sounds/crash.mp3');
  } else if (this.innerHTML === 'a') {
    playAudio('./sounds/kick-bass.mp3');
  } else if (this.innerHTML === 's') {
    playAudio('./sounds/snare.mp3');
  } else if (this.innerHTML === 'd') {
    playAudio('./sounds/tom-1.mp3');
  } else if (this.innerHTML === 'j') {
    playAudio('./sounds/tom-2.mp3');
  } else if (this.innerHTML === 'k') {
    playAudio('./sounds/tom-3.mp3');
  } else if (this.innerHTML === 'l') {
    playAudio('./sounds/tom-4.mp3');
  } else {
    console.log(this.innerHTML);
  }
}

function playAudio(audioLink) {
  var audio = new Audio(audioLink);
  audio.play();
}

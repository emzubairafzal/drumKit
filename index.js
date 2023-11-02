var buttonList = document.querySelectorAll(".drum");

for (var i=0; i<buttonList.length; i++) {
  buttonList[i].addEventListener('click', getClicked);
}

function getClicked() {
  var buttonInnerHTML = this.innerHTML;
  conditionsCheck(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

document.addEventListener('keydown', (event) => {
  conditionsCheck(event.key);
  buttonAnimation(event.key);
});

function conditionsCheck(key) {
  
  if (key === 'w') {
    playAudio('./sounds/crash.mp3');
  } else if (key === 'a') {
    playAudio('./sounds/kick-bass.mp3');
  } else if (key === 's') {
    playAudio('./sounds/snare.mp3');
  } else if (key === 'd') {
    playAudio('./sounds/tom-1.mp3');
  } else if (key === 'j') {
    playAudio('./sounds/tom-2.mp3');
  } else if (key === 'k') {
    playAudio('./sounds/tom-3.mp3');
  } else if (key === 'l') {
    playAudio('./sounds/tom-4.mp3');
  } else {
    console.log(key);
  }
}

function playAudio(audioLink) {
  var audio = new Audio(audioLink);
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector(`.${currentKey}`);
  console.log(activeButton);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

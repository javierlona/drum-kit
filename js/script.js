const keys = document.querySelectorAll(".key");
// console.log(keys);

function play_sound(e) {
  // console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(key);
  if(!audio) return;
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add('playing');
}

function remove_transition(e) {
  if(e.propertyName !== 'transform') return;
  // console.log(e);
  // console.log(this);
  this.classList.remove("playing");
}

// Old method
// for(i=0; i < keys.length; i++) {
//   keys[i].addEventListener("transitionend", remove_transition, false)
// }
  
// New ES6 method
keys.forEach(key => key.addEventListener("transitionend", remove_transition, false));

window.addEventListener('keydown', play_sound, false);
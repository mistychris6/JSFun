let numberOfDrums = document.querySelectorAll(".drum").length


for (i = 0; i < numberOfDrums; i++) {

  // Dectect Button press
  document.querySelectorAll(".drum")[i].addEventListener("click", function (pressedKey) {
    let buttonText = this.innerHTML
    makeSound(buttonText)
    buttonAnimation(buttonText)
  })
}

// Dectect Keydown
document.addEventListener("keydown", function (event) {
  makeSound(event.key)
  buttonAnimation(event.key)
})

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio('sounds/tom-1.mp3')
      tom1.play()
      break;
    case "a":
      let tom2 = new Audio('sounds/tom-2.mp3')
      tom2.play()
      break;
    case "s":
      let tom3 = new Audio('sounds/tom-3.mp3')
      tom3.play()
      break;
    case "d":
      let tom4 = new Audio('sounds/tom-4.mp3')
      tom4.play()
      break;
    case "j":
      let kick = new Audio('sounds/kick-bass.mp3')
      kick.play()
      break;
    case "k":
      let snare = new Audio('sounds/snare.mp3')
      snare.play()
      break;
    case "l":
      let crash = new Audio('sounds/crash.mp3')
      crash.play()
      break;

    default:
      console.log(buttonText)
      break;
  }
}

function buttonAnimation(currentKey) {
  let selectedButton = document.querySelector("." + currentKey)
  selectedButton.classList.add("pressed")
  setTimeout(function () {
    selectedButton.classList.remove("pressed")
  }, 100)
}
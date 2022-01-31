var button = document.querySelectorAll(".animal").length;

for (i = 0; i<button; i++) {
  document.querySelectorAll(".animal")[i].addEventListener("click", function() {

    var animalButton = this.innerHTML;
    animalSound(animalButton);
    pressed(animalButton);
  });
}

document.addEventListener("keydown", function(event) {
  animalSound(event.key);
  pressed(event.key);
});

function animalSound(key) {

  switch (key) {
    case "c":
      var cat = new Audio("sounds/Cat.mp3");
      cat.play();
      break;

    case "d":
      var dog = new Audio("sounds/Dog.mp3");
      dog.play();
      break;

    case "l":
      var lion = new Audio("sounds/Lion.mp3");
      lion.play();
      break;

    case "e":
      var elephant = new Audio("sounds/Elephant.mp3");
      elephant.play();
      break;

    case "m":
      var monkey = new Audio("sounds/Monkey.mp3");
      monkey.play();
      break;

    case "p":
      var pig = new Audio("sounds/Pig.mp3");
      pig.play();
      break;
    default: console.log(event);
}
}

function pressed(pressedKey) {
  var pressedButton = document.querySelector("." + pressedKey);
  pressedButton.classList.add("pressed");
  setTimeout(function() {
    pressedButton.classList.remove("pressed");
  }, 300);
}

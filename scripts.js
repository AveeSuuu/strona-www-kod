let buttonClicks = 0;

function increaseButtonNumber(buttonId) {
  var button = document.getElementById(buttonId);
  button.innerText = `Button clicks: ${++buttonClicks}`;
}

function resetCounterAndShowNotification(buttonId) {
  resetCounter(buttonId);
  showNotification();
}

function resetCounter(buttonId) {
  var button = document.getElementById(buttonId);
  buttonClicks = 0;
  button.innerText = `Button clicks: ${0}`;
}

function showNotification() {
  var panel = document.getElementById("myPanel");
  panel.style.right = "-120px";
  setTimeout(function () {
    panel.style.right = "-720px";
  }, 3500);
}

document.getElementById("countButton").addEventListener(
  "click",
  increaseButtonNumber,
  "countButton"
);

document.getElementById("resetButton").addEventListener(
  "click",
  resetCounterAndShowNotification,
  "countButton"
);

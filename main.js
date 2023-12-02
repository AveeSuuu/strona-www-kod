let buttonClicks = 0;

function increaseButtonNumber(buttonId){
  var button = document.getElementById(buttonId);
  button.innerText = `Button clicks: ${++buttonClicks}`;
}

function resetCounterAndShowNotification(buttonId){
  resetCounter(buttonId);
  var panel = document.getElementById("myPanel");
  panel.style.right = "-120px";
  setTimeout(function() {
    panel.style.right = "-720px";
  }, 3500);
}

function resetCounter(buttonId){
  var button = document.getElementById(buttonId);
  buttonClicks = 0;
  button.innerText = `Button clicks: ${buttonClicks}`;
}
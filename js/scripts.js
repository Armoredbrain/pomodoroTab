function addTomato() {
  console.log('add tomato')
  let tomatoContainer = document.getElementById("tomatoContainer");
  let tomato = document.createElement("div")
  tomato.classList.add("tomato");
  tomatoContainer.append(tomato);
}

function clearTomato() {
  let tomatoContainer = document.getElementById("tomatoContainer");
  tomatoContainer.innerHTML = '';
  console.log('clear tomato')
}

function clearPause() {
  let pauseContainer = document.getElementById("pauseContainer");
  pauseContainer.innerHTML = '';
  console.log('clear pause icon')
}

function timeForABreak() {
  let tomatoContainer = document.getElementById("pauseContainer");
  let pauseIcon = document.createElement("div");
  pauseIcon.classList.add("pauseContainer");
  let iconLeft = document.createElement("div");
  let iconRight = document.createElement("div");
  iconLeft.classList.add("iconPart");
  iconRight.classList.add("iconPart");
  pauseIcon.append(iconLeft);
  pauseIcon.append(iconRight);
  tomatoContainer.append(pauseIcon);
}

// Chronemeter
let startTime = 0
let start = 0
let end = 0
let diff = 0
let timerID = 0
function chrono() {
  end = new Date()
  diff = end - start
  diff = new Date(diff)
  let sec = diff.getSeconds()
  let min = diff.getMinutes()
  let minute = 29 - min
  let seconde = 59 - sec
  document.title = minute + ':' + seconde
  if (minute < 10) {
    min = "0" + minute
  }
  if (seconde < 10) {
    sec = "0" + seconde
  }
  document.getElementById("chronotime").innerHTML = minute + ":" + seconde

  timerID = setTimeout("chrono()", 10)
}
function chronoStart() {
  document.chronoForm.startstop.value = "pause!"
  document.chronoForm.startstop.onclick = chronoStop
  document.chronoForm.reset.onclick = chronoReset
  start = new Date()
  addTomato()
  chrono()
}
function chronoContinue() {
  document.chronoForm.startstop.value = "pause!"
  document.chronoForm.startstop.onclick = chronoStop
  document.chronoForm.reset.onclick = chronoReset
  start = new Date() - diff
  start = new Date(start)
  addTomato()
  chrono()
}
function chronoReset() {
  clearTomato()
  document.getElementById("chronotime").innerHTML = "0:00"
  start = new Date()
}
function chronoStopReset() {
  clearTomato()
  document.getElementById("chronotime").innerHTML = "0:00"
  document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop() {
  timeForABreak()
  document.chronoForm.startstop.value = "start!"
  document.chronoForm.startstop.onclick = chronoContinue
  document.chronoForm.reset.onclick = chronoStopReset
  clearTimeout(timerID)
}

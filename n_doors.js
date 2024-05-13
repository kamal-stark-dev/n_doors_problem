function calculateOpenDoors() {
  let numDoorsInput = document.getElementById("numDoors");
  let numDoors = parseInt(numDoorsInput.value);

  if (isNaN(numDoors) || numDoors < 1) {
    alert("Please enter a valid positive integer for the number of doors.");
    return;
  }

  let doors = new Array(numDoors).fill(0);

  for (let i = 1; i <= numDoors; i++) {
    for (let j = i - 1; j < numDoors; j += i) {
      doors[j] = 1 - doors[j];
    }
  }

  let numOpenDoors = doors.reduce((acc, val) => acc + val, 0);
  let openDoors = [];

  for (let k = 0; k < numDoors; k++) {
    if (doors[k] === 1) {
      openDoors.push(k + 1);
    }
  }

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `
        <p>Number of doors: ${numDoors}</p>
        <p>Number of open doors: ${numOpenDoors}</p>
        <p>Open doors: ${openDoors.join(", ")}</p>
    `;
}

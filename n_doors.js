function nDoors(n) {
  let doors = new Array(n).fill(0); // Create an array of n doors, all closed
  console.log("At start :", doors);
  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j < n; j += i) {
      doors[j] = 1 - doors[j]; // Toggle the door
    }
    console.log("When i =", i, "then :", doors);
  }

  let openDoors = [];
  for (let k = 0; k < n; k++) {
    if (doors[k] === 1) {
      openDoors.push(k + 1); // Index + 1 gives the door number
    }
  }

  return {
    doors: doors,
    numOpenDoors: doors.reduce((acc, val) => acc + val, 0),
    openDoors: openDoors,
  };
}

let n = 10;
let result = nDoors(n);
console.log("Number of doors: " + n);
console.log("Number of open doors: " + result.numOpenDoors);
console.log("Open doors: " + result.openDoors);

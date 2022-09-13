function handleArrowDown(arr) {
  const array = [...arr];
  let emptyCellQueue = [];
  let tempCords;
  for (let col = 0; col < 4; col++) {
    for (let row = 3; row >= 0; row--) {
      if (array[row][col] == 0) {
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      } else if (array[row][col] != 0 && emptyCellQueue.length > 0) {
        tempCords = emptyCellQueue.shift();
        console.log(tempCords);
        array[tempCords.emptyRow][tempCords.emptyCol] = array[row][col];
        array[row][col] = 0;
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      }
    }
    emptyCellQueue = [];
  }

  for (let cols = 0; cols < 4; cols++) {
    for (let rows = 0; rows < 3; rows++) {
      if (array[rows][cols] == array[rows + 1][cols]) {
        array[rows + 1][cols] *= 2;
        array[rows][cols] = 0;
        rows++;
      }
    }
  }
  emptyCellQueue = [];
  for (let col = 0; col < 4; col++) {
    for (let row = 3; row >= 0; row--) {
      if (array[row][col] == 0) {
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      } else if (array[row][col] != 0 && emptyCellQueue.length > 0) {
        tempCords = emptyCellQueue.shift();
        console.log(tempCords);
        array[tempCords.emptyRow][tempCords.emptyCol] = array[row][col];
        array[row][col] = 0;
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      }
    }
    emptyCellQueue = [];
  }

  return array;
}

function handleArrowUp(arr) {
  const array = [...arr];
  let emptyCellQueue = [];
  let tempCords;
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      if (array[row][col] == 0) {
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      } else if (array[row][col] != 0 && emptyCellQueue.length > 0) {
        tempCords = emptyCellQueue.shift();
        console.log(tempCords);
        array[tempCords.emptyRow][tempCords.emptyCol] = array[row][col];
        array[row][col] = 0;
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      }
    }
    emptyCellQueue = [];
  }

  for (let cols = 0; cols < 4; cols++) {
    for (let rows = 3; rows > 0; rows --) {
      if (array[rows][cols] == array[rows - 1][cols]) {
        array[rows - 1][cols] *= 2;
        array[rows][cols] = 0;
        rows--;
      }
    }
  }
  emptyCellQueue = [];
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      if (array[row][col] == 0) {
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      } else if (array[row][col] != 0 && emptyCellQueue.length > 0) {
        tempCords = emptyCellQueue.shift();
        console.log(tempCords);
        array[tempCords.emptyRow][tempCords.emptyCol] = array[row][col];
        array[row][col] = 0;
        emptyCellQueue.push({ emptyRow: row, emptyCol: col });
      }
    }
    emptyCellQueue = [];
  }

  return array;
}
export default {
  arrowDown: handleArrowDown,
  arrowUp: handleArrowUp,
};
const getRandomInt = (max) => {
  return Math.floor(Math.random * max)
}

const quickSort = (arr) => {
  let less = [];
  let pivotList = [];
  let more = [];
  let arrLength = arr.length;

  if (arrLength <= 1) return arr;

  let pivot = arr[getRandomInt(arrLength)];

  for (num in arr) {
    if (num < pivot) {
      less.push(num);
    } else if (num > pivot) {
      right.push(num);
    } else {
      pivotList.push(num);
    }
  }

  less = quickSort(less);
  more = quickSort(more);

  return console.log(less.concat(more, pivotList));
}

let test = [3, 4, 6, 2, 7, 8, 12, 43, 56, 67, 87, 23, 9, 5];

quickSort(test);
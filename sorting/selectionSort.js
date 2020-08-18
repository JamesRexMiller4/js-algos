const selectionSort = (arr) => {
  for (let current = 0; current < arr.length - 1; current++){
    let minIndex = current;
    for (let i = current + 1; i < arr.length; i++){
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    let temp = arr[current];
    arr[current] = arr[minIndex];
    arr[minIndex] = temp;
    temp = null;
  }
  console.log(arr);
  return arr
};

// BigO = O(N^2)

// Explanation: Selection sort minimizes the number of swaps by repeatedly scanning the unsorted segment of the array

// Will always perform (n^2 - n) / 2 comparisons (best/worst case)

const test = [1, 6, 7, 2, 4, 8, 12, 67, 23, 45, 99, 42];
const test2 = [-2, 34, -42, -6, 9, 12, 23, 100, 44, -99];

selectionSort(test);
selectionSort(test2);
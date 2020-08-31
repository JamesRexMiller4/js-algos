const bubbleSort = (arr) => {
  if (!Array.isArray(arr)) return 'Not an array';
  if (arr.length < 2) return arr;

  let swapped = false,
    temp = 0,
    count = -1,
    arrLength = 0;

    do {
      count++;
      swapped = false;
      arrLength = (arr.length - 1) - count;
      for (let i = 0; i < arrLength; i++) {
        if (arr[i] > arr[i + 1]) {
          temp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = temp;
          swapped = true;
        }
      }
    } while (swapped)
    return arr
}

const test = [42, 32, 5, 89, 0, 12, -90, 45];

console.log(bubbleSort(test));
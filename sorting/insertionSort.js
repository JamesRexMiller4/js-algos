const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = i;
    while(current > 0 && arr[current - 1] < arr[current]) {
      let temp = arr[current]
      arr[current] = arr[current - 1]
      arr[current - 1] = temp;
      temp = null;
      current--;
    }
  }
  console.log(arr);
  return arr
}

// BigO = O(N^2)

// Explanation: Insertion sort avoids extra scanning by performing extra swaps

const test = [345, 436, 4575, 2352, 12, 35235, 54];

insertionSort(test);
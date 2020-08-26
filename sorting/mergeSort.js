const merge = (left, right) => {
  let result = [], leftIdx = 0, rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  };

  return result
  .concat(left.slice(leftIdx))
  .concat(right.slice(rightIdx));
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  };
  
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}


let test = [4, 5, 2, 7, 8, 23, 34, 65, 0, 1, 25, 42];

console.log(mergeSort(test));
function bubbleSort(arr) {
  for (let j = arr.length; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      // compare with next index
      let currentVal = arr[i];

      if (currentVal > arr[i+1] ) {
        const temp = arr[i+1];
        arr[i+1] = currentVal;
        arr[i] = temp;
      }
    }
  }
  return arr;
}
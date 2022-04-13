let length = 0;
const arrayLength = (arr) => {
  while (arr[length] !== undefined) {
    length++;
  }
  return length;
};

console.log(arrayLength([1, 5, 3, 7, 8]));

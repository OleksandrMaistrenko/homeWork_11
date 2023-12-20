// Завдання на розуміння роботи методів масиву.

// Реалізувати функції, які працюватимуть ідентично методів some, filter, reduce:
const arr = [1, 2, 3];

function some(array, predicate) {
  return array[0] > 1 || array[1] > 1 || array[2] > 1 ? true : false;
}
console.log(some(arr));

// some(arr, (el) => el > 1); // true - те саме, що arr.some(el => el > 1)

function filter(array, predicate) {
  for (let value of array) {
    if (value > 1) {
      console.log(value);
    } else {
      console.log("number is less than one");
    }
  }
}
filter(arr);

//filter(arr, (el) => el > 1); // [2, 3] - те саме, що    //arr.filter((el) => el > 1);

function reduce(array, predicate, initialValue) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(reduce(arr));
// reduce(arr, (sum, el) => sum + el, 0); // 6 - те саме, що arr.reduce((sum, el) => sum + el, 0)

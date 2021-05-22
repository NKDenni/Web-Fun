// Get 1 to 255

function get_array() {
  var arr = [];
  for (var i = 1; i <= 255; i++) {
    arr.push(i);
  }
  return arr;
}

var arr = get_array();
console.log(arr);

// Get even 1000

function sum_even_numbers() {
  var a = 0;
  for (var i = 0; i <= 1000; i++) {
    if (i % 2 == 0) {
      var a = a + i;
    }
  }
  return a;
}

var sum = sum_even_numbers();
console.log(sum);

//Sum odd 5000

function sum_odd_5000() {
  var sum = 0;
  for (var i = 0; i <= 5000; i++) {
    if (i % 2 != 0) {
      sum = sum + i;
    }
  }
  return sum;
}

var sum = sum_odd_5000();
console.log(sum);

//Iterate an array

function iterArr(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

var arr = [1, 13, 7, 5];
var sum = iterArr(arr);
console.log(sum);

//Find max

function findMax(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

var arr = [1, 3, 12, 5];
var max = findMax(arr);
console.log(max);

//Find average

function findAvg(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    var avg = sum / arr.length;
  }
  return avg;
}

var arr = [1, 3, 9, 3];
var avg = findAvg(arr);
console.log(avg);

//Array odd

function oddNumbers() {
  var arr = [];
  for (var i = 0; i < 50; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}

var arr = oddNumbers(arr);
console.log(arr);

//Greater than Y

function greaterY(arr, Y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Y < arr[i]) {
            count = count + 1;
        }
    }
    return count;
}

var Y = 21;
var arr = [100,5,27,3,26,15];
var count = greaterY(arr,Y);
console.log(count);

//Squares

function squareVal(arr) {
    var x = 0;
    var y = 0;
    for (var i = 0; i < arr.length; i++) {
        x = arr[i];
        y = x * arr[i];
        arr[i] = y;
    }
    return arr;
}

var arr = [100, 5, 27, 3, 26, 15];
var newArr = squareVal(arr);
console.log(newArr);

//Negatives

function noNeg(arr) {
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

var original = [1, 5, 10, -2];
var newArr = noNeg(original);
console.log(newArr);

//Max/Min/Avg

function MaxMinAvg(arr) {
    var max = 0;
    var min = arr[0];
    var avg = 0;
    var sum = 0;
    var arrnew = [];

    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    arrnew.push(max);

    for (var j = 0; j < arr.length; j++) {
        if (min > arr[j]) {
            min = arr[j];
        }
    }
    arrnew.push(min);

    for (var k = 0; k < arr.length; k++) {
        sum = sum + arr[k];
        avg = sum / arr.length;
    }
    arrnew.push(avg);
    return arrnew;
}

var arr = [15,3,12,5,27,10];
var newArr = MaxMinAvg(arr);
console.log(newArr);

//Swap Values

function swap(arr) {
    var arrnew = [];
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}

var arr = [22, 3, 62, 5, 27, 13];
var newArr = swap(arr);
console.log(newArr);

//Number to String

function NumToStr(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

var arr = [2, 3, -69, 5, 0, -13];
var newArr = NumToStr(arr);
console.log(newArr);
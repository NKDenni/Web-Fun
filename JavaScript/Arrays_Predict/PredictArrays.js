//Predict 1

/* The for loop will go through each index and return the value of that index in the array. It will print to the console each value on the next line */

var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

//Predict 2

/* The for loop will iterate over each index and the if statment will check if the number is divisible by 2. If the value at the index i is not divisable by 2 it will print to the console "That is odd!". This is what the output will be: [That is odd!, That is odd!, 8, 4, 2, 0, That is odd!] */
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

//Predict 3

/* The for loop will iterate over the arry. The first if statment checks to see if the value at index i is less than 0. If it is it will push that value into newArr then it will multiply that value by -1 and replace that value with its new inverse. The else if statment will excute if the value at that index in arr is equal to 0 and replace the value with the string "Zero". If both the if and the else if are false the else will multiply the value at that index by -1 and replace the value with the new inverse value. Console.log (arr) will give us this array [-1,-3,-8,5,"Zero",2,-4,1]. console.log(newArr) will give us [-5,-2,-1] */
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);


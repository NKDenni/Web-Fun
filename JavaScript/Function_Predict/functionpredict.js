// Predict 1

/* The computer will remember the function greeting and proceed to line 8. We will call and store the return from the function in the variable word. The console.log ("World") is ignored as the return exit us out of the function before we print to the console. Finally we will print Hello to the console log. */

function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);

//Predict 2

/* Computer remembers function add and goes to line 23. Stores the value returned from add(3,5) into our variable result1. We call the function on line 23 and we will see Summing Numbers! printed to the consol log. We will also see num1 is 3 and num2 is 5 printed to the console. Finally we will get the sum of num1 + num2 returned and stored in result1. The same thing happens for line 24. The value stored in result1 = 8 and result2 = 11. The final print out will be:*/

/* Summing Numbers!
    num1 is 3
    num2 is 5
   Summing Numbers!
    num1 is 4
    num3 is 7
    8
    11*/

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

//Predict 3

/* Nothing happens. There isn't anything calling our function.*/

function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}
//Predict 1//
//The following code will print to consol 0 through 14 and then stop.//
//0,1,2,3,4,5,6,7,8,9,10,11,12,13,14//

for(var num = 0; num < 15; num++){
    console.log(num);
}


//Predict 2//
//The following code will start counting from 1 and stop once it reaches a value equal or greater than 10. The count is by twos. It will then check to see if the current value of i is divisable by 3 evenly. This happens when i = 3 and then a secon time at i=9 and will print the value of i to the consol. //
//3,9//

for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

//Predict 3//
//The following code will initiallize the variable j at 1 and will continue until it reaches a value of 15. If the current value of j is divisable by 2 it will add 2 to the value of j and then print to the log that value. If the value of j is not divisiable by 2 evenly but is divisable by 3 evenly it will add 1 to the current value of j and print to the consol the new value of j. If it is not divisable by 2 or 3 evenly it will print the current value of j and increment by one to the next value.//
//values of j: 1,4,5,8,10,11,14,16//

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}
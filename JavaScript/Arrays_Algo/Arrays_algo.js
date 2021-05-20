//Print sum and value
var sum = 0;
var testArr = [6,3,5,1,2,4]


for(var i=0;i<testArr.length; i+=1){
    var num = testArr[i];
    sum = sum + num;
    console.log("Num", num, "Sum", sum);
}

//Value * Position

var newArr =[]

for(var j=0; j<testArr.length; j++){
    var value = testArr[j] * j;
    newArr.push(value);
}
console.log(newArr);

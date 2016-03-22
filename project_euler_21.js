/*
 Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

 For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
 The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

 Evaluate the sum of all the amicable numbers under 10000.
* */

function getDivisors(num){
    var divisors = [];

    for(var i=1 ; i < num; i++ ){
        if(num%i === 0) divisors.push(i);
    }

    return divisors;
}

function getSumDivisors(num){

    var sum=0;
    getDivisors(num).forEach(function(item){sum+=item;});
    return sum;

}

var result=0;
for(var j=1; j<10000;j++){
    var a = getSumDivisors(j);
    var b = getSumDivisors(a);

    if(b === j && j !== a){
        result += j + a
    }
}

//each pair of amicable numbers was included twice, so divide by two to get the answer
result = result/2;
console.log(result); //31626

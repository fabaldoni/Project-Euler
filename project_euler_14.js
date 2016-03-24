/*

 The following iterative sequence is defined for the set of positive integers:
 n → n/2 (n is even)
 n → 3n + 1 (n is odd)

 Using the rule above and starting with 13, we generate the following sequence:

 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

 Which starting number, under one million, produces the longest chain?

 NOTE: Once the chain starts the terms are allowed to go above one million.

 */

function countTerms(n){

    if(Number.isNaN(n)) throw("Input must be a number");

    var nextTerm = n;
    var count = 1;

    do{
        nextTerm = (nextTerm%2===0)?nextTerm/2:3*nextTerm+1;
        count++;
    }while(nextTerm>1);

    return count;
}

var theNumber=0;
var numberOfTerms=0;

for(var i=2;i < 1000000; i++){
    var x = countTerms(i);
    if(x > numberOfTerms){
        numberOfTerms = x;
        theNumber =  i;
        console.log (i + " => " + numberOfTerms);
    }
}

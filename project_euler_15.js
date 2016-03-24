/*
 Project Euler # 15

 Any of the possible solutions have 40 steps you have to take, no more, no less.
 since you can only go right or down there are only two options for r or d.
 You will have exactly 20 d steps and 20 r steps. Therefore this turns into a
 combinatorics problem where you have 40 slots and you must pick all cominations of 20.

 So C(n,r) = n!/r!(n-r)! = 40!(!20*!20)


 */

function factorial(n){
    if(n === 1) return 1;
    if(n===0) return 1;
    return n*factorial(n-1);
}

var c = factorial(40)/(factorial(20)*factorial(20));
console.log(c);
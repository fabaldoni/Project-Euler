/*
 Project Euler #10

 The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

 Find the sum of all the primes below two million.

 */


function getPrimes(number){

    var sieve=[];
    var primes=0;
    sieve[number+1] = undefined;

    sieve[0]=false;

    sieve[1]= true;


    for(var i=2; i<number;i++){
        if(sieve[i] === undefined){

            //add the new prime to the sieve and add it to our result array.
            sieve[i] = true;
            primes+=i;

            //elimininate the multiples of the new prime from the sieve
            var j=2;
            var multiple=0;

            do{
                multiple = j*i;
                j++;
                if(multiple <= number){
                    sieve[multiple] = false;
                }
            } while(multiple <= number);

        }
        else{
            continue;
        }
    }

    return primes;
}

//var p = getPrimes(2000000-1).reduce(function(prev,curr){return prev+curr;},0);
var p = getPrimes(1999999);
console.log(p);
/*

 Problem #9

 A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

 a2 + b2 = c2
 For example, 32 + 42 = 9 + 16 = 25 = 52.

 There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 Find the product abc.

 */

// strategy: calculate all pythagorean triples where a + b + c <= 1000. Stop when we find 1000


function func(sumOfSides){
    var a=1,b=1,c=0;

    do{
        do{
            c = Math.sqrt(a*a + b*b);
            var obj = {"a":a,"b":b,"c":c,"abc":a*b*c}
            //console.log(obj);
            if (a+b+c === sumOfSides){
                return obj;
            }

            b++ ;
        } while(b < sumOfSides-2);

        b=1;
        a++;

    } while(a < sumOfSides-2);

    return "not found";
}

console.log(func(1000));
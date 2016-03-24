/*

 Number letter counts
 Problem 17
 If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

 If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


 NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

 */


//s = s.replace(/\s/ig, '');

var upTo20 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];


var tensPrefixes = ["ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function getLessThan21Word(num) {


    if (num < 21 && num % 10 !== 0)
        return upTo20[num - 1];
    else
        return undefined;
}


function getWord(num) {

    if (num === 1000) return "one thousand";

    var ones;
    var tens;
    var huns;

    var digitAr = num.toString().split("");

    if (digitAr.length === 3) {
        ones = parseInt(digitAr[digitAr.length - 1]);
        tens = parseInt(digitAr[digitAr.length - 2]);
        huns = parseInt(digitAr[digitAr.length - 3]);
    }
    if (digitAr.length === 2) {
        ones = parseInt(digitAr[digitAr.length - 1]);
        tens = parseInt(digitAr[digitAr.length - 2]);
    }
    if (digitAr.length === 1) {
        ones = parseInt(digitAr[digitAr.length - 1]);
    }

    if (num < 21 && num % 10 !== 0) return getLessThan21Word(num);

    if (num % 10 === 0 && num < 100) return tensPrefixes[num / 10 - 1];

    if (num > 20 && num < 100) {
        return tensPrefixes[tens - 1] + "-" + upTo20[ones - 1];
    }


    if (num % 100 === 0) {
        return getLessThan21Word(num / 100) + " hundred";
    }

    if (num > 99 && num < 1000) {
        var strNum = num + "";
        var buffer = getLessThan21Word(huns) + " hundred ";

        var tens_and_ones = tens * 10 + ones;

        if (tens_and_ones >= 20 && tens_and_ones < 100) {
            buffer += (ones !== 0) ? tensPrefixes[tens - 1] + "-" + upTo20[ones - 1] : "and " + tensPrefixes[tens - 1];
        }
        else {
            buffer += "and " + getLessThan21Word(tens_and_ones);
        }

        return buffer;
    }

    return undefined;
}

var s = "";
for (var i = 1; i <= 1000; i++) {
    s += getWord(i);
}

var str = s.replace(/\s*|-*/ig, "").replace(/-/ig, "");
console.log(str);
console.log(str.length);





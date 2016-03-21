/**
 You are given the following information, but you may prefer to do some research for yourself.

 1 Jan 1900 was a Monday.
 Thirty days has September,
 April, June and November.
 All the rest have thirty-one,
 Saving February alone,
 Which has twenty-eight, rain or shine.
 And on leap years, twenty-nine.
 A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
 How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

function isLeapYear(year) {
    if (year % 100 === 0) {
        return year % 400 == 0;
    }
    else {
        return year % 4 === 0;
    }
}


function daysInMonth(month, year) {
    switch (month) {
        case 1: //january
            return 31;
            break;
        case 2: //february
            return isLeapYear(year) ? 29 : 28;
            break;
        case 3: //march
            return 31;
            break;
        case 4: //april
            return 30;
            break;
        case 5: //may
            return 31;
            break;
        case 6: //june
            return 30;
            break;
        case 7: //july
            return 31;
            break;
        case 8: //august
            return 31;
            break;
        case 9: //september
            return 30;
            break;
        case 10: //october
            return 31;
            break;
        case 11: //november
            return 30;
            break;
        case 12: //december
            return 31;
            break;
    }
}

var results = [];
var day_of_week = 0;

for (var y = 1900; y <= 2000; y++) {

    for (var m = 1; m <= 12; m++) {

        for (var d = 1; d <= daysInMonth(m, y); d++) {
            day_of_week++;
            if (day_of_week === 7 && d === 1) {
                if (y > 1900) {
                    results.push({"year": y, "month": m, "day": d, "weekday": day_of_week});
                }
            }

            if (day_of_week === 7) {
                day_of_week = 0;
            }
        }
    }
}

console.log(results.length);

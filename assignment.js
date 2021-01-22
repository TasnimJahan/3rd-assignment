// kilometer to meter problem solution
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "ERROR!! Distance can not be negative";
    } else if (typeof (kilometer) != 'number') {
        return "OOPS! Please input a number value";
    }
    var meter = kilometer * 1000;
    return meter;
}




// 2. Budget calculator Solution
function budgetCalculator(clock, mobile, laptop) {
    if (clock < 0 || mobile < 0 || laptop < 0) {
        return "ERROR!! Number of object can not be negative";
    } else if ((typeof (clock) != 'number') || (typeof (mobile) != 'number') || (typeof (laptop) != 'number')) {
        return "OOPS! Please input a number value";
    }
    var clockPrice = clock * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = clockPrice + mobilePrice + laptopPrice;
    return totalPrice;
}




// 3. Hotel Cost Problem Solution
var totalCost = 0;

function hotelCost(days) {
    if (typeof (days) != 'number') {
        return "OOPS! Please input a number value";
    }
    if (days < 0) {
        return "ERROR!! Number of days can not be a negative value";
    } else if (days <= 10) {
        totalCost = days * 100;
    } else if (days <= 20) {
        var firstTenDaysCost = 100 * 10;
        var remainingDays = days - 10;
        var remainingDaysCost = remainingDays * 80;
        totalCost = firstTenDaysCost + remainingDaysCost;
    } else {
        firstTenDaysCost = 100 * 10;
        var secondTenDaysCost = 80 * 10;
        remainingDays = days - 20;
        remainingDaysCost = remainingDays * 50;
        totalCost = firstTenDaysCost + secondTenDaysCost + remainingDaysCost;
    }
    return totalCost;
}




// 4. megaFriend Problem Solution
function megaFriend(friendsName) {
    if (friendsName === undefined || friendsName.length == 0) {
        return "Array can not be null. Please input some value.";
    }
    let max = friendsName[0];
    for (let i = 0; i < friendsName.length; i++) {
        const element = friendsName[i];
        if (element.length > max.length) {
            max = element;
        }
    }
    return max;
}
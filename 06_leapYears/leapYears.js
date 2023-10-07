const leapYears = function(year) {


    if (year % 400 === 0) {

        console.log('its a leap year 400');
        return true;
        
    } else if (year % 100 === 0){

        console.log('its a not leap year 100');
        return false;

    } else if (year % 4 === 0){

        console.log('its a leap year 4');
        return true;
    }
    else {
        console.log('its not a leap year');
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;

const repeatString = function(txt,x) {
    
    if (x<0) {
        return 'ERROR';
    } else {
        let i =0;
    let string='';
    while (i<x) {
        string += txt;
        i++;
    }
    return string;
    }


};

// Do not edit below this line
module.exports = repeatString;

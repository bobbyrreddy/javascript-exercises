const reverseString = function(txt) {

    let arrTxt=txt.split('');
    arrTxt.reverse(); 

    return (arrTxt.join(''));

};

// Do not edit below this line
module.exports = reverseString;

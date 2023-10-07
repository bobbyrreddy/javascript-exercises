const sumAll = function(x,y) {

    if (!(typeof x)==='number'&&!(typeof y)==='number') {

        return('ERROR');
    }

    if (x<0||y<0) {

        return('ERROR');

    }

    if(x>y)
    {
        const t=x;
        x=y;
        y=t;
    }
    
    let sum = 0
    for (let i = x; i <= y; i++) {
        sum = sum +i;
        
    }

    return sum;




}

// Do not edit below this line
module.exports = sumAll;

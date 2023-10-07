const convertToCelsius = function(temp) {

  const fTc = (((temp - 32)*5)/9);

  if(Number.isInteger(fTc))   return fTc;
  else                        return Number(fTc.toFixed(1));

}

const convertToFahrenheit = function(temp) {

  const cTf = ((((temp*9))/5)+32);

  if(Number.isInteger(cTf)) return cTf;
  else                      return Number(cTf.toFixed(1));
  

}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

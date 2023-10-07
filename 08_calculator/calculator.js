const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	
  let sumedValue=0;

  array.forEach(sumFunc);
  //for each takes function to be done on each item
  function sumFunc(item) {
      sumedValue += item;
  }

      return sumedValue;
};

const multiply = function(array) {
  let multipiledResult = 1;
                    
  array.forEach(multiplier);

  function multiplier(item){
      multipiledResult *= item;
  }

  console.log(`from inside the multiply function ${ multipiledResult }`)
  return multipiledResult;

};

const power = function(a,x) {


  let powerOf=1;
  for (let i = 0; i < x; i++) {


      powerOf *=a;
      
  }
  console.log(`from inside the power function ${ powerOf }`)
  return powerOf;

	
};

const factorial = function(a) {
	
  let factResult=1;
  for (let i = 1; i <= a; i++) {
       factResult *=i;
      
  }
  console.log(`from inside the factorial function ${ factResult }`)
  return factResult;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
